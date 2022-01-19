<template>
	<div class="enum">
		<label
			class="item"
			:class="{ selected: item === modelValue }"
			v-for="item in items"
			:key="item"
		>
			<input class="visually-hidden" type="radio" :value="item" @input="onInput" />
			<span>{{ item }}</span>
		</label>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void
}>()

defineProps<{
	modelValue: string
	items: string[]
}>()

const onInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>
.enum {
	background-color: $white;
	border-radius: $small-radius;
	box-shadow: $shadow-gray-dark;
	padding: 8px 10px;
	display: inline-flex;
	gap: 10px;

	.item {
		background-color: $gray-light;
		padding: 14px 24px;
		position: relative;
		transition: $transition;
		transition-property: background-color, box-shadow;
		cursor: pointer;

		&:first-child {
			border-radius: $small-radius 0 0 $small-radius;
		}

		&:last-child {
			border-top-right-radius: $small-radius;
			border-bottom-right-radius: $small-radius;
		}

		&:hover {
			box-shadow: inset $shadow-gray-dark;
		}

		&.selected {
			background-color: $black;
			color: $white;
		}
	}
}
</style>
