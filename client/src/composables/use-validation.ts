import { ref } from 'vue'
import { AnySchema } from 'joi'

const useValidation = (validationSchema: AnySchema) => {
	const error = ref<string>()

	const onBlur = (value: FocusEvent) => {
		const result = validationSchema.validate((value.target as HTMLInputElement).value)
		error.value = result.error?.message
	}

	return { error, onBlur }
}

export default useValidation
