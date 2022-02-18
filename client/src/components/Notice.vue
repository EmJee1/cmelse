<template>
	<div class="notice" :class="{ error: type === 'error' }">
		<i v-if="type === 'error'" class="bi bi-exclamation-triangle" />
		<slot />
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	type: 'error'
}>()
</script>

<style lang="scss" scoped>
.notice {
	padding: 8px 12px;
	border: 2px solid;

	i {
		margin-right: 8px;
	}

	&.error {
		border-radius: $small-radius;
		border-color: $error;
		color: $error;
	}
}
</style>
