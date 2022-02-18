<template>
	<Loader fullscreen v-if="!model" />
	<div class="container" v-else>
		<div class="row">
			<div class="col">
				<h1>{{ model.cmsMetadata.title }}</h1>
			</div>
		</div>
	</div>
	<Card>
		<div class="row">
			<div class="col">
				<table>
					<thead>
						<tr>
							<th v-for="item in tableItems" :key="item">
								{{ model[item].options.displayTitle }}
							</th>
							<th>Created at</th>
						</tr>
					</thead>
					<tbody v-if="rows.length">
						<tr v-for="(row, index) in rows" :key="index">
							<td v-for="item in tableItems" :key="item">
								{{ row[item] }}
							</td>
							<td>
								{{ new Date(row.createdAt).toLocaleString() }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</Card>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import models from 'models'
import { Model } from 'models/interfaces/interfaces'
import getModelProperties from '../helpers/get-model-properties'
import Card from '../components/Card.vue'
import Loader from '../components/Loader.vue'

const route = useRoute()
const model = ref<Model>()
const rows = ref<{ [key: string]: unknown }[]>([])

onMounted(() => {
	model.value = models.find(m => m.cmsMetadata.collection === route.params.model)

	if (!model.value) {
		// TODO: show 404
		return
	}

	if (!model.value?.cmsMetadata.endpoint) {
		// TODO: show unexpected error
		return
	}

	axios
		.get(`/models${model.value.cmsMetadata.endpoint}`)
		.then(({ data }) => {
			rows.value = data.data
		})
		.catch(err => console.error(err))
})

const tableItems = computed(() => {
	if (!model.value) {
		return null
	}

	return getModelProperties(model.value).slice(0, 3)
})
</script>

<style lang="scss" scoped>
:deep(.card) {
	max-width: 100%;
}

table {
	width: 100%;
	border-collapse: collapse;
}

thead {
	margin-bottom: 20px;
}

tbody tr {
	font-weight: 400;
	font-size: rem(14px);

	td {
		background-color: $gray-light;
	}

	td:first-child {
		border-radius: 90px 0 0 90px;
	}

	td:last-child {
		border-radius: 0 90px 90px 0;
	}
}

th {
	font-weight: 600;
	font-size: rem(16px);
	padding-bottom: 10px;
}

td {
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 20rem;
	padding: 15px 8px;
}
</style>
