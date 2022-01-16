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
$toggle-height: 40px;
$toggle-width: 80px;
$toggle-ball-padding: 3px;

.toggle {
	position: relative;
	display: block;
	width: $toggle-width;
	height: $toggle-height;
	padding: $toggle-ball-padding;
	background-color: $white;
	border-radius: 99px;
	box-shadow: $shadow-gray-dark;

	input {
		opacity: 0;
		width: 0;
		height: 0;

		&:checked + .slider {
			background-color: #d1d1d1;

			&::before {
				transform: translateX(($toggle-width / 2));
			}
		}
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: $toggle-ball-padding;
		left: $toggle-ball-padding;
		bottom: $toggle-ball-padding;
		right: $toggle-ball-padding;
		background-color: $white;
		transition: background-color $transition;
		border-radius: 99px;

		&::before {
			content: '';
			position: absolute;
			width: $toggle-height;
			height: $toggle-height;
			background-color: $black;
			transition: transform $transition;
			border-radius: 99px;
			top: 0;
			left: 0;
		}
	}
}
</style>
