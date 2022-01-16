<template>
	<input
		type="number"
		class="datatype-input"
		:class="{ error }"
		v-model.number="value"
	/>
	<ErrorText v-if="error">{{ error }}</ErrorText>
</template>

<script lang="ts" setup>
import ErrorText from '../ErrorText.vue'

defineProps<{
	value: number
	error?: string
}>()
</script>

<style lang="scss" scoped></style>
