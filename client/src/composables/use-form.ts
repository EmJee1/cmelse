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

			// TODO: fix exposed component variables not picked up by typescript
			// https://github.com/vuejs/core/issues/4397
			// @ts-ignore
			return input.value.valid
		})

	return { formValidate, error }
}

export default useForm
