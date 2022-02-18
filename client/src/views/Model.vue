<template>
	<div class="container" v-if="model">
		<div class="row">
			<div class="col">
				<h1>{{ model.cmsMetadata.title }}</h1>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import models from 'models'
import { Model } from 'models/interfaces/interfaces'

const route = useRoute()
const model = ref<Model>()

onMounted(() => {
	model.value = models.find(m => m.cmsMetadata.collection === route.params.model)
})
</script>

<style lang="scss" scoped></style>
