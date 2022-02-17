<template>
	<Loader v-if="loading" fullscreen />
	<template v-else>
		<Navbar v-if="loggedInUser" />
		<Login v-if="!loggedInUser" />
		<div v-else class="app">
			<router-view />
		</div>
	</template>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import loggedInUser from './stores/user-store'
import Login from './views/Login.vue'
import Navbar from './components/Navbar.vue'
import Loader from './components/Loader.vue'

const loading = ref(false)

onMounted(() => {
	if (localStorage.getItem('token')) {
		loading.value = true

		axios
			.get('/authentication/profile')
			.then(({ data }) => {
				loggedInUser.value = data
			})
			.catch(() => {
				localStorage.removeItem('token')
			})
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
