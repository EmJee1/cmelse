<template>
	<Navbar v-if="loggedInUser" />
	<Login v-if="!loggedInUser" />
	<div v-else class="app">
		<router-view />
	</div>
</template>

<script lang="ts" setup>
import loggedInUser from './stores/user-store'
import Login from './views/Login.vue'
import Navbar from './components/Navbar.vue'
</script>

<style lang="scss" scoped>
.app {
	@media ($mq-tablet) {
		margin-left: $navbar-width;
	}
}
</style>
