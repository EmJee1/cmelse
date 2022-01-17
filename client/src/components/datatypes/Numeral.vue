<template>
	<input
		type="number"
		class="datatype-input"
		@blur="onBlur"
		:class="{ error }"
		v-model.number="value"
	/>
	<ErrorText v-if="error">{{ error }}</ErrorText>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnySchema } from 'joi'
import useValidation from '../../composables/use-validation'
import ErrorText from '../ErrorText.vue'

const props = defineProps<{
	value: number
	validationSchema: AnySchema
}>()

const { error, onBlur } = useValidation(props.validationSchema)
</script>
