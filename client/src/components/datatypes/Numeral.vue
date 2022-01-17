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
import useValidation from '../../composables/use-validation'
import ErrorText from '../ErrorText.vue'

const props = defineProps<{
	value: number
	validationSchema: AnySchema
}>()

const { error, validate } = useValidation(props.validationSchema)
</script>
