<template>
	<input
		v-if="!multiline"
		v-model="value"
		class="datatype-input"
		:class="{ error }"
		placeholder="Its claws and horns often break off."
	/>
	<div v-else class="textarea">
		<textarea
			v-model="value"
			class="datatype-input"
			:class="{ error }"
			placeholder="Its claws and horns often break off."
			rows="5"
		/>
	</div>
	<ErrorText v-if="error">{{ error }}</ErrorText>
</template>

<script lang="ts" setup>
import ErrorText from '../ErrorText.vue'

defineProps<{
	value: string
	multiline?: boolean
	error?: string
}>()
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
