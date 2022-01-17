import { ref } from 'vue'
import { AnySchema } from 'joi'

const useValidation = (validationSchema: AnySchema) => {
	const error = ref<string>()

	const validate = (value: FocusEvent) => {
		const result = validationSchema.validate((value.target as HTMLInputElement).value)
		error.value = result.error?.toString()
	}

	return { error, validate }
}

export default useValidation
