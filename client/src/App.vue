<template>
	<Loader v-if="loading" fullscreen />
	<template v-else>
		<Navbar v-if="user" />
		<Login v-if="!user" />
		<div v-else class="app">
			<router-view />
		</div>
	</template>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import useAuthentication from './composables/use-authentication'
import Login from './views/Login.vue'
import Navbar from './components/Navbar.vue'
import Loader from './components/Loader.vue'

const { login, logout, user } = useAuthentication()

const loading = ref(false)

onMounted(() => {
	if (localStorage.getItem('token')) {
		loading.value = true

		axios
			.get('/authentication/profile')
			.then(({ data }) => login({ username: data.username, email: data.email }))
			.catch(() => logout())
			.finally(() => {
				loading.value = false
			})
	}
})
</script>

<style lang="scss" scoped>
.app {
	@media ($mq-tablet) {
		margin-left: $navbar-width;
	}
}
</style>
