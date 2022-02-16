import { ref } from 'vue'
import { AnySchema } from 'joi'

const useValidation = (validationSchema: AnySchema) => {
	const valid = ref(false)
	const error = ref<string>()

	const onBlur = (e: FocusEvent) => {
		const result = validationSchema.validate((e.target as HTMLInputElement).value)
		error.value = result.error?.message
	}

	const onInput = (e: InputEvent) => {
		const result = validationSchema.validate((e.target as HTMLInputElement).value)
		valid.value = !result.error
	}

	return { error, valid, onBlur, onInput }
}

export default useValidation
