<template>
	<div v-if="fullscreen" class="loader-fullscreen">
		<span class="loader"></span>
	</div>
	<span v-else class="loader"></span>
</template>

<script lang="ts" setup>
defineProps<{
	fullscreen?: boolean
}>()
</script>

<style lang="scss" scoped>
.loader-fullscreen {
	position: fixed;
	display: grid;
	place-items: center;
	inset: 0;
}

.loader {
	position: relative;
	width: 48px;
	height: 48px;
	background: $black;
	border-radius: 50%;
	animation: ellipseAnimation 2s linear infinite;
}

@keyframes ellipseAnimation {
	0% {
		border-radius: 50%;
	}

	12.5% {
		border-radius: 0 50% 50% 50%;
		transform: rotate(45deg);
	}

	25% {
		border-radius: 0 0 50% 50%;
		transform: rotate(90deg);
	}

	37.5% {
		border-radius: 0 0 0 50%;
		transform: rotate(135deg);
	}

	50% {
		border-radius: 0;
		transform: rotate(180deg);
	}

	62.5% {
		border-radius: 50% 0 0 0;
		transform: rotate(225deg);
	}

	75% {
		border-radius: 50% 50% 0 0;
		transform: rotate(270deg);
	}

	87.5% {
		border-radius: 50% 50% 50% 0;
		transform: rotate(315deg);
	}

	100% {
		border-radius: 50%;
		transform: rotate(360deg);
	}
}
</style>
