<template>
	<div class="backdrop" @click="$emit('close')">
		<div class="modal"></div>
	</div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { disableBodyScroll, enableBodyScroll } from '../helpers/body-scroll'

defineEmits(['close'])

onBeforeMount(() => disableBodyScroll())
onBeforeUnmount(() => enableBodyScroll())
</script>

<style lang="scss" scoped>
.backdrop {
	position: fixed;
	background-color: transparentize($gray-dark, 0.6);
	z-index: $z-modal-backdrop;
	inset: 0;
}

.modal {
	background-color: white;
}
</style>
