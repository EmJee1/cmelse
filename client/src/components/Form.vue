<template>
	<form class="form">
		<slot />
	</form>
</template>

<style lang="scss" scoped>
:deep(.form_input),
:deep(.form_submit) {
	margin-top: 10px;

	&:first-of-type:not(.form_submit) {
		margin-top: 0;
	}
}
</style>
