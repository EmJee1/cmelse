<template>
	<div class="backdrop" @click="$emit('close')">
		<div class="modal" @click.stop>
			<div class="modal_header">
				<h2 class="modal_header_title">{{ title }}</h2>
				<p v-if="subtitle" class="modal_header_subtitle">{{ subtitle }}</p>
			</div>
			<div class="modal_body">
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { disableBodyScroll, enableBodyScroll } from '../helpers/body-scroll'

defineProps<{
	title: string
	subtitle?: string
}>()

const emit = defineEmits(['close'])

const keydownEventListener = (e: KeyboardEvent) => {
	if (e.code === 'Escape') {
		emit('close')
	}
}

onBeforeMount(() => {
	window.addEventListener('keydown', keydownEventListener)
	disableBodyScroll()
})

onBeforeUnmount(() => {
	window.removeEventListener('keydown', keydownEventListener)
	enableBodyScroll()
})
</script>

<style lang="scss" scoped>
.backdrop {
	position: fixed;
	background-color: transparentize($gray-dark, 0.6);
	z-index: $z-modal-backdrop;
	inset: 0;
	display: grid;
	place-items: center;
}

.modal {
	background-color: $gray-light;
	width: 100%;
	max-width: 900px;
	padding: 20px 40px;
	border-radius: $small-radius;

	&_header {
		&_title {
			@include heading-2;
			margin-bottom: 0;
		}

		&_subtitle {
			color: $gray-dark;
			margin: 6px 0 0 0;
		}
	}

	&_body {
		margin-bottom: 30px;
	}
}
</style>
