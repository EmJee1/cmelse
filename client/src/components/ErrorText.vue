<template>
	<div class="error" role="alert">
		<i class="bi bi-x-octagon" />
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.error {
	color: $error;
	padding-top: 0.4rem;
	padding-left: 0.2rem;
	display: flex;
	gap: 0.4rem;
}
</style>
