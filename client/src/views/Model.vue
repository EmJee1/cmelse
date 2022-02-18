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
						</tr>
					</thead>
					<tbody v-if="rows.length">
						<tr v-for="(row, index) in rows" :key="index">
							<td v-for="item in tableItems" :key="item">
								{{ row[item] }}
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
			console.log(rows.value)
		})
		.catch(err => console.error(err))
})

const tableItems = computed(() => {
	if (!model.value) {
		return null
	}

	return getModelProperties(model.value)
})
</script>

<style lang="scss" scoped></style>
