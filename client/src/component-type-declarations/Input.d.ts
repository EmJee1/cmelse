import { Ref } from 'vue'

export interface IInput {
	valid: Ref<boolean>
	validate: (value: string) => void
}
