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

const emit = defineEmits<{
	(e: 'update:modelValue', value: number): void
}>()

const props = defineProps<{
	modelValue: number
	validationSchema: AnySchema
}>()

const { error, onBlur } = useValidation(props.validationSchema)

const joiValidationMethod = Joi.number().required()

const onInput = (e: Event) => {
	const rawValue = (e.target as HTMLInputElement).value
	const { error: validationError } = joiValidationMethod.validate(rawValue)

	if (validationError) {
		error.value = validationError.message
		return
	}

	error.value = undefined

	emit('update:modelValue', Number(rawValue))
}
</script>
