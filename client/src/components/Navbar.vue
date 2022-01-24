<template>
	<div class="navbar">
		<nav>
			<router-link to="/" class="navbar_item">
				<i class="bi bi-house" />
				Home
			</router-link>
			<router-link to="/models" class="navbar_item">
				<i class="bi bi-collection"></i>
				Models
			</router-link>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
.navbar {
	position: fixed;
	display: block;
	top: 0;
	left: 0;
	bottom: 0;
	background-color: $black;
	color: $white;
	padding: 30px 45px 30px 30px;

	&_item {
		color: $white;
		text-decoration: none;
		font-weight: 500;
		font-size: rem(16px);
		display: flex;
		gap: 8px;
	}
}
</style>
