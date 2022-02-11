<template>
	<Navbar v-if="loggedInUser" />
	<div :class="{ 'logged-in': loggedInUser }">
		<router-view />
	</div>
</template>

<script lang="ts" setup>
import loggedInUser from './stores/user-store'
import Navbar from './components/Navbar.vue'
</script>

<style lang="scss" scoped>
.logged-in {
	@media ($mq-tablet) {
		margin-left: $navbar-width;
	}
}
</style>
