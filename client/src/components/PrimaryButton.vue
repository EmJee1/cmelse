<template>
	<button v-if="element === 'button'" class="primary-button">
		<slot/>
	</button>
	<a v-else-if="element === 'link'" class="primary-button">
		<slot/>
	</a>
</template>

<script lang="ts" setup>
defineProps<{
	element: 'link' | 'button'
}>()
</script>

<style lang="scss" scoped>
.primary-button {
	display: block;
	padding: 12px 40px;
	background: $purple;
	color: $white;
	border-radius: $big-radius;
	border: 1px transparent;
	cursor: pointer;
}
</style>
