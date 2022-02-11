<template>
	<component :is="element" class="primary-btn">
		<slot />
	</component>
</template>

<script lang="ts" setup>
defineProps<{
	element: 'a' | 'button'
}>()
</script>

<style lang="scss" scoped>
.primary-btn {
	display: block;
	padding: 12px 40px;
	background: $purple;
	color: $white;
	border-radius: $big-radius;
	border: 1px transparent;
	cursor: pointer;
}
</style>
