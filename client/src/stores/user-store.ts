import { ref } from 'vue'

interface IUser {
	username: string
	password: string
}

const loggedInUser = ref<IUser>()

export default loggedInUser
