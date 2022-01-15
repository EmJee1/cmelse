<template>
	<div>
		<img src="../assets/logo.svg" alt="logo" width="100" />
		<nav>
			<div
				class="item"
				v-for="(item, index) in items"
				:key="index"
				@click="$router.push(item.link)"
			>
				<h3>{{ item.name }}</h3>
				<i :class="item.icon"></i>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'navbar',
	data() {
		return {
			items: [
				{
					name: 'Dashboard',
					link: '/',
					icon: 'fas fa-home',
				},
				{
					name: 'Models',
					link: '/models',
					icon: 'fas fa-draw-polygon',
				},
				{
					name: 'Templates',
					link: '/templates',
					icon: 'fas fa-file-alt',
				},
				{
					name: 'Options',
					link: '/options',
					icon: 'fas fa-cog',
				},
			],
		}
	},
}
</script>

<style></style>
