<template>
	<div class="form_input">
		<label v-if="label" :for="label?.id">{{ label.text }}</label>
		<input
			:value="modelValue"
			@input="onInput"
			class="datatype-input"
			:placeholder="placeholder"
			:id="label?.id"
			:type="type"
		/>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue'])

export interface Label {
	text: string
	id: string
}

defineProps<{
	modelValue: string
	placeholder?: string
	label?: Label
	type?: string
}>()

const onInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped></style>
