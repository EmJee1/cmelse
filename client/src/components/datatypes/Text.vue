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
input,
textarea {
	width: 80%;
	margin: 0 auto;
	padding: 14px 20px;
	border-color: transparent;
	border-radius: $small-radius;
	box-shadow: $shadow-gray-dark;
	outline-color: transparentize($purple, 0.25);
}

textarea {
	resize: vertical;
}
</style>
