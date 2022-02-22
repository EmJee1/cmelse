<template>
	<div class="card">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.card {
	background: $white;
	box-shadow: $shadow;
	border-radius: $small-radius;
	padding: 26px 12px;
}
</style>
