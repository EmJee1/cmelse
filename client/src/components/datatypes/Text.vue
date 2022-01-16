<template>
	<input v-if="!multiline" v-model="value" />
	<textarea v-else v-model="value" rows="5" />
</template>

<script lang="ts" setup>
defineProps<{
	value: string
	multiline?: boolean
}>()
</script>

<style lang="scss" scoped>
$padding-horizontal: 20px;
$border-width: 2px;

input,
textarea {
	// 100% width minus the padding and border to prevent overflow
	width: calc(100% - $padding-horizontal * 2 - $border-width * 2);
	padding: 14px $padding-horizontal;
	border: $border-width solid transparent;
	border-radius: $small-radius;
	box-shadow: $shadow-gray-dark;
	outline-color: transparentize($purple, 0.25);
}

textarea {
	resize: vertical;
}
</style>
