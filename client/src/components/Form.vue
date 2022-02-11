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

:deep(.form_actions) {
	@include content-spacing-top;
	display: flex;
	justify-content: space-between;
}

:deep(.form_label) {
	display: block;
	margin-bottom: 6px;
	font-size: rem(14px);
	font-weight: 600;
	color: $gray-dark;
}
</style>
