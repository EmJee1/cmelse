<template>
	<Loader fullscreen v-if="!model" />
	<div class="container" v-else>
		<div class="row">
			<div class="col model_head">
				<h1>{{ model.cmsMetadata.title }}</h1>
				<ButtonIcon icon="bi bi-plus" @click="newModel = true">Add</ButtonIcon>
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
	<Modal v-if="selected || newModel" :title="model.cmsMetadata.title" @close="closeModal">
		<ModelForm
			:model="model"
			:initial-values="selected"
			:id="selected?._id"
			@close="closeModal"
		/>
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
import ModelForm from '../components/Model/ModelForm.vue'
import ButtonIcon from '../components/ButtonIcon.vue'

const route = useRoute()
const model = ref<Model>()
const newModel = ref(false)
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
		.catch(() => {
			// TODO: show unexpected error
		})
})

const tableData = computed(() => {
	if (!res.value || !model.value) {
		return undefined
	}

	// preview the first two model properties plus the created and updated date-time
	const previewedModelProperties = getModelProperties(model.value).slice(0, 2)

	const rows = res.value.map(row => ({
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

	selected.value = res.value.find(row => row._id === id)
}

const closeModal = (newItem?: { [key: string]: unknown }) => {
	newModel.value = false
	selected.value = undefined

	if (!res.value || !newItem) {
		return
	}

	const indexToUpdate = res.value.findIndex(item => item._id === newItem._id)

	if (indexToUpdate !== -1) {
		res.value[indexToUpdate] = newItem
		return
	}

	res.value.push(newItem)
}
</script>

<style lang="scss" scoped>
:deep(.card) {
	max-width: 100%;
}

.model_head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
