<template>
	<button class="icon-btn" :class="{ error }" :disabled="disabled">
		<i class="icon bi" :class="icon"></i>
		<span class="text" v-if="text">
			<slot />
		</span>
	</button>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'

defineProps<{
	icon: string
	error?: boolean
	disabled?: boolean
}>()

const { default: text } = useSlots()
</script>

<style lang="scss" scoped>
.icon-btn {
	padding: 10px;
	color: $purple;
	background: white;
	border-color: transparent;
	border-radius: $small-radius;
	box-shadow: $shadow-purple;
	transition: $transition;
	cursor: pointer;

	.icon {
		font-size: 16px;
	}

	.text {
		margin-left: 10px;
		font-size: 14px;
	}

	&:hover {
		box-shadow: $shadow-purple-hover;
	}

	&.error {
		color: $error;
		box-shadow: $shadow-error;

		&:hover {
			box-shadow: $shadow-error-hover;
		}
	}

	&:disabled {
		color: $gray-dark;
		box-shadow: $shadow-gray-dark;
		cursor: not-allowed;

		&:hover {
			box-shadow: $shadow-gray-dark;
		}
	}
}
</style>
