<template>
	<div class="form_input">
		<label v-if="label" class="form_label" :for="label?.id">{{ label.text }}</label>
		<input
			:autocomplete="autocomplete"
			class="datatype-input"
			:id="label?.id"
			:placeholder="placeholder"
			:type="type"
			:value="modelValue"
			@input="onInput"
			@blur="onBlur"
		/>
		<ErrorText v-if="error">{{ error }}</ErrorText>
	</div>
</template>

<script lang="ts" setup>
import { AnySchema } from 'joi'
import useValidation from '../composables/use-validation'
import ErrorText from './ErrorText.vue'

const emit = defineEmits(['update:modelValue'])

interface Label {
	text: string
	id: string
}

const props = defineProps<{
	modelValue: string
	validationSchema: AnySchema
	autocomplete?: string
	label?: Label
	placeholder?: string
	type?: string
}>()

const {
	error,
	valid,
	validate,
	onBlur,
	onInput: validationOnInput,
} = useValidation(props.validationSchema)

const onInput = (e: InputEvent) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
	validationOnInput(e)
}

defineExpose({ valid, validate })
</script>
