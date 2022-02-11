<template>
	<Component :is="element" class="link-btn">
		<slot />
	</Component>
</template>

<script lang="ts" setup>
defineProps<{
	element: 'a' | 'button' | 'router-link'
}>()
</script>

<style lang="scss" scoped>
.link-btn {
	padding: $btn-spacing-y 0;
	border: none;
	background: transparent;
	color: $black;
	font-size: rem(14px);
	text-decoration: none;
	cursor: pointer;
	position: relative;
	transition: color $transition;

	&:hover {
		color: $purple;
	}

	&:after {
		content: '';
		display: block;
		height: 1px;
		width: 100%;
		margin-top: 2px;
		position: absolute;
		background: $purple;
	}
}
</style>
