import { ref } from 'vue'

interface IUser {
	username: string
	email: string
}

const user = ref<IUser>()

const useAuthentication = () => {
	const logout = () => {
		user.value = undefined
		localStorage.removeItem('token')
	}

	const login = (newUser: IUser) => {
		user.value = newUser
	}

	return { user, login, logout }
}

export default useAuthentication
