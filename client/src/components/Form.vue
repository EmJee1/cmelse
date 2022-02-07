<template>
	<form class="form">
		<slot />
	</form>
</template>

<style lang="scss" scoped>
:deep(.form_input) {
	margin-top: 22px;

	&:first-of-type:not(.form_submit) {
		margin-top: 0;
	}
}

:deep(.form_submit) {
	margin-top: 50px;
}
</style>
