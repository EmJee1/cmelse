import { ref } from 'vue'
import { AnySchema } from 'joi'

const useValidation = (validationSchema: AnySchema) => {
	const valid = ref(false)
	const error = ref<string>()

	const validate = (e: FocusEvent) => {
		const result = validationSchema.validate((e.target as HTMLInputElement).value)
		error.value = result.error?.message
	}

	const onInput = (e: InputEvent) => {
		const result = validationSchema.validate((e.target as HTMLInputElement).value)
		valid.value = !result.error
	}

	return { error, valid, validate, onInput }
}

export default useValidation
