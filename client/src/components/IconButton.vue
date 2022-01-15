<template>
	<button class="icon-btn" :class="{ error, disabled }">
		<i class="icon" :class="icon"></i>
		<span class="text" v-if="slot">
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

const { default: slot } = useSlots()
</script>

<style lang="scss" scoped>
.icon-btn {
	padding: 10px;
	color: $purple;
	background: white;
	border-color: transparent;
	border-radius: $small-radius;
	box-shadow: $shadow-purple;
	transition: $transition-hover;
	cursor: pointer;

	.icon {
		width: 22px;
		height: 22px;
	}

	.text {
		margin-left: 10px;
	}

	&:hover {
		box-shadow: $shadow-purple-hover;
	}

	&.error {
		color: $error;
	}

	&.disabled {
		color: $gray-dark;
	}
}
</style>
