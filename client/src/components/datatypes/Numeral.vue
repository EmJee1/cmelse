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
import { AnySchema } from 'joi'
import useValidation from '../../composables/use-validation'
import ErrorText from '../ErrorText.vue'

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

const props = defineProps<{
	modelValue: string
	validationSchema: AnySchema
}>()

const { error, onBlur } = useValidation(props.validationSchema)

const onInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
