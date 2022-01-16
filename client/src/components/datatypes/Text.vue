<template>
	<input
		v-if="!multiline"
		v-model="value"
		:class="{ error }"
		placeholder="Its claws and horns often break off."
	/>
	<div v-else class="textarea">
		<textarea
			v-model="value"
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
$padding-horizontal: 20px;
$border-width: 2px;

input,
textarea {
	// 100% width minus the padding and border to prevent overflow
	width: calc(100% - $padding-horizontal * 2 - $border-width * 2);
	padding: 14px $padding-horizontal;
	border: $border-width solid transparent;
	border-radius: $small-radius;
	box-shadow: $shadow-gray-dark;
	outline: none;
	resize: vertical;

	&::-webkit-resizer {
		display: none;
	}

	&::placeholder {
		color: $gray;
	}

	&:focus {
		border-color: $purple;
		box-shadow: $shadow-purple;
	}

	&.error {
		border-color: $error;
		box-shadow: $shadow-error;
	}
}

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
}
</style>
