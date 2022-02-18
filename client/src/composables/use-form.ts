import { ref, Ref } from 'vue'
import Input from '../components/Input.vue'

type FormInputs = Ref<InstanceType<typeof Input> | undefined>

const useForm = (formInputs: FormInputs[]) => {
	const error = ref<string>()

	const formValidate = (): boolean =>
		formInputs.every(input => {
			// if we have no input (empty ref)
			// don't hang on validation error but let the server handle it
			if (!input.value) {
				return true
			}

			return input.value.valid
		})

	return { formValidate, error }
}

export default useForm
