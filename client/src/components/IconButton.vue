<template>
	<button class="icon-btn" :class="{ error, disabled }">
		<i class="icon" :class="icon"></i>
		<slot />
	</button>
</template>

<script setup lang="ts">
defineProps<{
	icon: string
	error?: boolean
	disabled?: boolean
}>()
</script>

<style lang="scss" scoped>
.icon-btn {
	padding: 10px;
	color: $purple;
    background: white;

	.icon {
		width: 22px;
		height: 22px;
	}

    &.error {
        color: $error;
    }

    &.disabled {
        color: $gray-dark;
    }
}
</style>
