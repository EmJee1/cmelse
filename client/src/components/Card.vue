<template>
	<div class="container">
		<div class="card">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	background: $white;
	box-shadow: $shadow;
	border-radius: $big-radius;
}
</style>
