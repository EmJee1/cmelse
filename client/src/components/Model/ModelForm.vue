<template>
	<Form class="model-form" @submit.prevent="onSubmit">
		<Notice v-if="error" type="error">{{ error }}</Notice>
		<div v-for="property in modelProperties" :key="property" class="model-form_item">
			<p class="model-form_item-title">
				{{ model[property].options.displayTitle }}
			</p>
			<div class="model-form_item-input">
				<Text
					v-if="model[property].datatype === Datatype.Text"
					v-model="formValues[property]"
					:validation-schema="model[property].options.validationSchema"
					:multiline="model[property].options.multiline"
				/>
				<Numeral
					v-if="model[property].datatype === Datatype.Numeral"
					v-model="formValues[property]"
					:validation-schema="model[property].options.validationSchema"
				/>
				<Toggle
					v-if="model[property].datatype === Datatype.Toggle"
					v-model="formValues[property]"
					:validation-schema="model[property].options.validationSchema"
				/>
				<Enum
					v-if="model[property].datatype === Datatype.Enum"
					v-model="formValues[property]"
					:validation-schema="model[property].options.validationSchema"
					:items="model[property].options.items"
					:name="property"
				/>
			</div>
		</div>
		<div class="form_actions">
			<ButtonIcon icon="bi-save" error type="button" @click="$emit('close')">
				Discard
			</ButtonIcon>
			<ButtonIcon icon="bi-save" type="submit">Save</ButtonIcon>
		</div>
	</Form>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { Datatype } from 'models'
import { Model } from 'models/interfaces/interfaces'
import { IDatatype } from 'datatypes/interfaces/interfaces'
import { IEnumOptions } from 'datatypes/Enum'
import getModelProperties from '../../helpers/get-model-properties'
import Form from '../Form.vue'
import Text from '../datatypes/Text.vue'
import Numeral from '../datatypes/Numeral.vue'
import Toggle from '../datatypes/Toggle.vue'
import Enum from '../datatypes/Enum.vue'
import ButtonIcon from '../ButtonIcon.vue'
import Notice from '../Notice.vue'

const emit = defineEmits(['close'])

const props = defineProps<{
	model: Model
	id?: string
	initialValues?: { [key: string]: unknown }
}>()

const error = ref<string>()
const formValues = ref<{ [key: string]: unknown }>({})

const modelProperties = computed(() => getModelProperties(props.model))

const getDefaultValue = (datatype: IDatatype) => {
	if (datatype.datatype === Datatype.Text) {
		return ''
	}

	if (datatype.datatype === Datatype.Numeral) {
		return 0
	}

	if (datatype.datatype === Datatype.Toggle) {
		return false
	}

	if (datatype.datatype === Datatype.Enum) {
		return (datatype.options as IEnumOptions).items[0]
	}

	return ''
}

onBeforeMount(() => {
	modelProperties.value.forEach(property => {
		formValues.value[property] =
			props.initialValues?.[property] ?? getDefaultValue(props.model[property] as IDatatype)
	})
})

const onSubmit = () => {
	const { endpoint } = props.model.cmsMetadata

	if (props.id) {
		axios
			.patch(`/models${endpoint}/${props.id}`, formValues.value)
			.then(() => emit('close', { _id: props.id, ...formValues.value }))
			.catch(err => {
				error.value = err.response?.data.err ?? 'Something went wrong'
			})

		return
	}

	axios
		.post(`/models${endpoint}`, formValues.value)
		.then(({ data }) => {
			emit('close', { _id: data.id, ...formValues.value })
		})
		.catch(err => {
			error.value = err.response?.data.err ?? 'Something went wrong'
		})
}
</script>

<style scoped lang="scss">
$item-title-width: 180px;

.model-form {
	@include content-spacing-top;

	&_item {
		display: flex;
		align-items: flex-start;

		&:not(&_item:first-of-type) {
			margin-top: 22px;
		}
	}

	&_item-title {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		display: inline-block;
		margin: 0;

		@media ($mq-tablet) {
			width: $item-title-width;
		}
	}

	&_item-input {
		display: inline-block;
		width: 100%;

		@media ($mq-tablet) {
			width: calc(100% - #{$item-title-width});
		}
	}

	.form_actions {
		justify-content: flex-end;
		gap: 22px;
	}
}
</style>
