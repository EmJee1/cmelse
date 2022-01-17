<template>
	<div class="enum">
		<label
			class="item"
			:class="{ selected: item === value }"
			v-for="item in items"
			:key="item"
		>
			<input
				class="visually-hidden"
				type="radio"
				:value="item"
				v-model="value"
			/>
			<span>{{ item }}</span>
		</label>
	</div>
	<ErrorText v-if="error">{{ error }}</ErrorText>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnySchema } from 'joi'

const props = defineProps<{
	value: string
	items: string[]
	validationSchema: AnySchema
}>()

const error = ref<string>()

const validate = () => {
	const result = props.validationSchema.validate(props.value)
	error.value = result.error?.toString()
}
</script>

<style lang="scss" scoped>
.enum {
	background-color: $white;
	border-radius: $small-radius;
	padding: 8px 10px;
	display: inline-flex;
	gap: 10px;

	.item {
		background-color: $gray-light;
		padding: 14px 24px;
		position: relative;
		transition: background-color $transition;
		cursor: pointer;

		&:first-child {
			border-radius: $small-radius 0 0 $small-radius;
		}

		&:last-child {
			border-top-right-radius: $small-radius;
			border-bottom-right-radius: $small-radius;
		}

		&.selected {
			background-color: $black;
			color: $white;
		}
	}
}
</style>
