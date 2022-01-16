<template>
	<input
		type="number"
		class="datatype-input"
		@blur="validate"
		:class="{ error }"
		v-model.number="value"
	/>
	<ErrorText v-if="error">{{ error }}</ErrorText>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnySchema } from 'joi'
import ErrorText from '../ErrorText.vue'

const props = defineProps<{
	value: number
	validationSchema: AnySchema
}>()

const error = ref<string>()

const validate = () => {
	const result = props.validationSchema.validate(props.value)
	error.value = result.error?.toString()
}
</script>

<style lang="scss" scoped></style>
