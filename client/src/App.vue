<template>
	<div calss="container">
		<navbar />
		<router-view />
	</div>
</template>

<script lang="ts">
import navbar from './components/Navbar.vue'

export default {
	components: { navbar },
}
</script>

<style lang="scss" scoped></style>
