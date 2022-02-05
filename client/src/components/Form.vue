<template>
	<form class="form">
		<slot />
	</form>
</template>

<style lang="scss" scoped>
.form :deep(.form_input) {
	margin-top: 10px;

	&:first-of-type {
		margin-top: 0;
	}
}
</style>
