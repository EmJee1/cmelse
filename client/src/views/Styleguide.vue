<template>
	<div class="item">
		<h2>Icon button</h2>
		<p>With text</p>
		<div class="collection">
			<IconButton icon="bi-save">Primary icon button</IconButton>
			<IconButton icon="bi-trash2" error> Error icon button </IconButton>
			<IconButton icon="bi-x-octagon" disabled>
				Disabled icon button
			</IconButton>
		</div>
		<p>Without text</p>
		<div class="collection">
			<IconButton icon="bi-save" aria-label="save" />
			<IconButton icon="bi-trash2" aria-label="error" error />
			<IconButton icon="bi-x-octagon" aria-label="disabled" disabled />
		</div>
	</div>

	<div class="item">
		<h2>Datatype Text</h2>
		<p>Single line</p>
		<Text value="Its claws and horns often break off." />
		<p>Multiline</p>
		<Text value="Its claws and horns often break off." multiline />
	</div>
</template>

<script lang="ts" setup>
import IconButton from '../components/IconButton.vue'
import Text from '../components/datatypes/Text.vue'
</script>

<style lang="scss" scoped>
$styleguide-item-bg: #ebebeb;

.item {
	max-width: 800px;
	margin: 1rem auto 0 auto;
	padding: 1.4rem 2rem;
	background: $styleguide-item-bg;

	> h2 {
		margin-top: 0;
	}
}

.collection {
	position: relative;
	display: block;

	> *:not(:last-child) {
		margin-right: 1rem;
	}
}
</style>
