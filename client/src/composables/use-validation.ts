import { ref } from 'vue'
import { AnySchema } from 'joi'

const useValidation = (validationSchema: AnySchema) => {
	const error = ref<string>()

	const validate = (value: unknown) => {
		const result = validationSchema.validate(value)
		error.value = result.error?.toString()
	}

	return { error, validate }
}

export default useValidation
