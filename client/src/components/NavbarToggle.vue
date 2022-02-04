<template>
	<button class="navbar-toggle" :class="{ opened: modelValue }" @click="onToggle">
		<i class="bi bi-arrow-right" />
	</button>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void
}>()

const props = defineProps<{
	modelValue: boolean
}>()

const onToggle = (e: Event) => {
	emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss" scoped>
$margin-around: 30px;
$toggle-size: 40px;

.navbar-toggle {
	position: fixed;
	bottom: $margin-around;
	left: $margin-around;
	border: 1px solid transparent;
	border-radius: $small-radius;
	height: $toggle-size;
	width: $toggle-size;
	transition: transform $transition;
	transition-property: transform, background-color, color;
	background-color: $black;
	color: $white;
	cursor: pointer;

	i {
		font-size: 1.2rem;
		transition: transform $transition;
		display: block;
	}

	&.opened {
		transform: translateX(calc(100vw - #{$margin-around * 2 + $toggle-size}));
		background-color: $white;
		color: $black;

		i {
			transform: rotate(-180deg);
		}
	}

	@media ($mq-tablet) {
		display: none;
	}
}
</style>
