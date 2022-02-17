import { ref, Ref } from 'vue'
import Input from '../components/Input.vue'

type FormInputs = Ref<InstanceType<typeof Input> | undefined>

const useForm = (formInputs: FormInputs[]) => {
	const error = ref<string>()

	const validateForm = (): boolean =>
		formInputs.every(input => {
			// if we have no input (empty ref)
			// don't hang on validation error but let the server handle it
			if (!input.value) {
				return true
			}

			if (!input.value.valid) {
				// validate function will show validation error on the first field with an validation error
				input.value.validate?.()
				return false
			}

			return true
		})

	return { validateForm, error }
}

export default useForm
