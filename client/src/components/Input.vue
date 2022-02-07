<template>
	<div class="form_input">
		<label v-if="label" :for="label?.id">{{ label.text }}</label>
		<input
			:autocomplete="autocomplete"
			class="datatype-input"
			:id="label?.id"
			:placeholder="placeholder"
			:type="type"
			:value="modelValue"
			@input="onInput"
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
	autocomplete?: string
	label?: Label
	placeholder?: string
	type?: string
}>()

const onInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped></style>
