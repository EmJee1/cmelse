import { ref } from 'vue'
import { AnySchema } from 'joi'

const useValidation = (validationSchema: AnySchema) => {
	const valid = ref(false)
	const error = ref<string>()

	const validate = (value: string) => {
		const result = validationSchema.validate(value)
		error.value = result.error?.message
	}

	const onBlur = (e: FocusEvent) => validate((e.target as HTMLInputElement).value)

	const onInput = (e: InputEvent) => {
		const result = validationSchema.validate((e.target as HTMLInputElement).value)
		valid.value = !result.error
	}

	return { error, valid, validate, onInput, onBlur }
}

export default useValidation
