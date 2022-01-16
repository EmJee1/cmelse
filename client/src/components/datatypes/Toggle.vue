<template>
	<label class="toggle">
		<input type="checkbox" />
		<span class="slider" />
	</label>
</template>

<script lang="ts" setup>
defineProps<{
	value: boolean
}>()
</script>

<style lang="scss" scoped>
.toggle {
	position: relative;
	width: 100px;
	height: 46px;

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.ball {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: $white;
		transition: $transition;
	}
}
</style>
