<template>
	<input
		type="number"
		class="datatype-input"
		placeholder="195"
		:value="modelValue"
		@blur="validate"
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

const { error, validate } = useValidation(props.validationSchema)

const onInput = (e: Event) => {
	const rawValue = (e.target as HTMLInputElement).value
	const { error: validationError } = Joi.number().required().validate(rawValue)

	if (validationError) {
		error.value = validationError.message
		return
	}

	error.value = undefined

	emit('update:modelValue', Number(rawValue))
}
</script>
