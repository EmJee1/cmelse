<template>
	<Loader fullscreen v-if="!model" />
	<div class="container" v-else>
		<div class="row">
			<div class="col">
				<h1>{{ model.cmsMetadata.title }}</h1>
			</div>
		</div>
		<Card>
			<div class="row">
				<div class="col">
					<Table :data="tableData" />
				</div>
			</div>
		</Card>
	</div>
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
import Table from '../components/Table.vue'

const route = useRoute()
const model = ref<Model>()
const res = ref<{ [key: string]: unknown }[]>()

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
			res.value = data.data
		})
		.catch(err => {
			// TODO: show unexpected error
			console.error(err)
		})
})

const tableData = computed(() => {
	if (!res.value || !model.value) {
		return undefined
	}

	// preview the first two model properties plus the created and updated date-time
	const previewedModelProperties = getModelProperties(model.value).slice(0, 2)

	return res.value?.map(row => ({
		[previewedModelProperties[0]]: row[previewedModelProperties[0]],
		[previewedModelProperties[1]]: row[previewedModelProperties[1]],
		createdAt: row.createdAt,
	}))
})
</script>

<style lang="scss" scoped>
:deep(.card) {
	max-width: 100%;
}
</style>
