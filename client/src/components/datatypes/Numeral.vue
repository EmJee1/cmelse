<template>
	<input
		type="number"
		class="datatype-input"
		placeholder="195"
		:value="modelValue"
		@blur="onBlur"
		@input="onInput"
		:class="{ error }"
	/>
	<ErrorText v-if="error">{{ error }}</ErrorText>
</template>

<script lang="ts" setup>
import Joi, { AnySchema } from 'joi'
import useValidation from '../../composables/use-validation'
import ErrorText from '../ErrorText.vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
	modelValue: number
	validationSchema: AnySchema
}>()

const {
	error,
	valid,
	validate,
	onBlur,
	onInput: validationOnInput,
} = useValidation(props.validationSchema)

const onInput = (e: Event) => {
	validationOnInput(e as InputEvent)
	const rawValue = (e.target as HTMLInputElement).value
	const { error: validationError } = Joi.number().required().validate(rawValue)

	if (validationError) {
		error.value = validationError.message
		return
	}

	error.value = undefined

	emit('update:modelValue', Number(rawValue))
}

defineExpose({ valid, validate })
</script>
