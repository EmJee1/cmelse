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
					<Table
						:data="tableData?.rows"
						:columns="tableData?.columns"
						clickable-property="_id"
						@row:click="onRowClick"
					/>
				</div>
			</div>
		</Card>
	</div>
	<Modal v-if="selected" :title="model.cmsMetadata.title" @close="selected = undefined">
		<h4>Hello, Modal!</h4>
	</Modal>
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
import Modal from '../components/Modal.vue'

const route = useRoute()
const model = ref<Model>()
const selected = ref<{ [key: string]: unknown }>()
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

	const rows = res.value?.map(row => ({
		[previewedModelProperties[0]]: row[previewedModelProperties[0]],
		[previewedModelProperties[1]]: row[previewedModelProperties[1]],
		createdAt: row.createdAt,
		_id: row._id,
	}))

	const columns = [
		{
			displayName: model.value[previewedModelProperties[0]].options.displayTitle,
			key: previewedModelProperties[0],
		},
		{
			displayName: model.value[previewedModelProperties[1]].options.displayTitle,
			key: previewedModelProperties[1],
		},
		{
			displayName: 'Created at',
			key: 'createdAt',
		},
	]

	return { rows, columns }
})

const onRowClick = (id: string) => {
	if (!res.value) {
		return
	}

	const rowValues = res.value.find(row => row._id === id)
	selected.value = rowValues
}
</script>

<style lang="scss" scoped>
:deep(.card) {
	max-width: 100%;
}
</style>
