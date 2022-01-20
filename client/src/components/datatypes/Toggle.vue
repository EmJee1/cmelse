<template>
	<label class="toggle">
		<input class="visually-hidden" type="checkbox" @input="onInput" :checked="modelValue" />
		<span class="slider" />
	</label>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void
}>()

defineProps<{
	modelValue: boolean
}>()

const onInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
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

	input:checked + .slider {
		background-color: #d1d1d1;

		&::before {
			transform: translateX($toggle-width - $toggle-height);
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
			width: $toggle-height - $toggle-ball-padding * 2;
			height: $toggle-height - $toggle-ball-padding * 2;
			background-color: $black;
			transition: transform $transition;
			border-radius: 99px;
			top: 0;
			left: 0;
		}
	}
}
</style>
