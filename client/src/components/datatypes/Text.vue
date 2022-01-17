<template>
	<input
		v-if="!multiline"
		v-model="value"
		@blur="onBlur"
		class="datatype-input"
		:class="{ error }"
		placeholder="Its claws and horns often break off."
	/>
	<div v-else class="textarea">
		<textarea
			v-model="value"
			@blur="onBlur"
			class="datatype-input"
			:class="{ error }"
			placeholder="Its claws and horns often break off."
			rows="5"
		/>
	</div>
	<ErrorText v-if="error">{{ error }}</ErrorText>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnySchema } from 'joi'
import useValidation from '../../composables/use-validation'
import ErrorText from '../ErrorText.vue'

const props = defineProps<{
	value: string
	validationSchema: AnySchema
	multiline?: boolean
}>()

const { error, onBlur } = useValidation(props.validationSchema)
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
