<template>
	<input
		v-if="!multiline"
		:value="modelValue"
		@blur="onBlur"
		@input="onInput"
		class="datatype-input"
		:class="{ error }"
		placeholder="Its claws and horns often break off."
	/>
	<div v-else class="textarea">
		<textarea
			:value="modelValue"
			@blur="onBlur"
			@input="onInput"
			class="datatype-input"
			:class="{ error }"
			placeholder="Its claws and horns often break off."
			rows="5"
		/>
	</div>
	<ErrorText v-if="error">{{ error }}</ErrorText>
</template>

<script lang="ts" setup>
import { AnySchema } from 'joi'
import useValidation from '../../composables/use-validation'
import ErrorText from '../ErrorText.vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
	modelValue?: string
	validationSchema: AnySchema
	multiline?: boolean
}>()

const { error, valid, onBlur, onInput: validationOnInput } = useValidation(props.validationSchema)

const onInput = (e: Event) => {
	validationOnInput(e as InputEvent)
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}

defineExpose({ valid })
</script>

<style lang="scss" scoped>
.textarea {
	position: relative;
	pointer-events: none;

	&::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 4px;
		width: 12px;
		height: 12px;
		background: url('../../assets/icons/resize-textarea.svg');
		background-size: contain;
		margin: 4px;
	}

	textarea {
		resize: vertical;

		&::-webkit-resizer {
			display: none;
		}
	}
}
</style>
