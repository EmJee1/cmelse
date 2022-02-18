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
	padding: $btn-spacing-y 40px;
	background: $purple;
	color: $white;
	border-radius: $big-radius;
	border: 1px transparent;
	font-size: rem(14px);
	font-weight: 500;
	cursor: pointer;
	text-transform: uppercase;
}
</style>
