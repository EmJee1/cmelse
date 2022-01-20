<template>
	<div class="item">
		<h2>Icon button</h2>
		<p>With text</p>
		<div class="collection">
			<IconButton icon="bi-save">Primary icon button</IconButton>
			<IconButton icon="bi-trash2" error> Error icon button </IconButton>
			<IconButton icon="bi-x-octagon" disabled> Disabled icon button </IconButton>
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
		<Text :validation-schema="Joi.string().required()" v-model="datatypeTextValue" />
		<p>Multiline</p>
		<Text
			:validation-schema="Joi.string().required()"
			v-model="datatypeTextMultilineValue"
			multiline
		/>
	</div>

	<div class="item">
		<h2>Datatype Numeral</h2>
		<Numeral
			:validation-schema="Joi.number().required().integer()"
			v-model="datatypeNumberValue"
		/>
	</div>

	<div class="item">
		<h2>Datatype Toggle</h2>
		<p class="text-with-code">
			Use this with <code>v-model.boolean=""</code> to prevent Vue warnings
		</p>
		<Toggle v-model.boolean="datatypeToggleValue" />
	</div>

	<div class="item">
		<h2>Datatype Enum</h2>
		<Enum :items="['spring', 'summer', 'fall', 'winter']" v-model="datatypeEnumValue" />
	</div>

	<div class="item">
		<h2>Modal</h2>
		<button @click="toggleModal">Toggle modal</button>
		<Modal v-if="modalVisible" @close="toggleModal" title="Products" subtitle="Add a product">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum harum fugit
				temporibus eligendi in. Esse labore sint aliquam facilis id maiores natus ducimus,
				perspiciatis repellat nisi ipsum fugiat!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum harum fugit
				temporibus eligendi in. Esse labore sint aliquam facilis id maiores natus ducimus,
				perspiciatis repellat nisi ipsum fugiat!
			</p>
		</Modal>
	</div>
</template>

<script lang="ts" setup>
import Joi from 'joi'
import { ref } from 'vue'
import IconButton from '../components/IconButton.vue'
import Text from '../components/datatypes/Text.vue'
import Numeral from '../components/datatypes/Numeral.vue'
import Toggle from '../components/datatypes/Toggle.vue'
import Enum from '../components/datatypes/Enum.vue'
import Modal from '../components/Modal.vue'

const datatypeTextValue = ref('')
const datatypeTextMultilineValue = ref('')
const datatypeNumberValue = ref(1)
const datatypeToggleValue = ref(false)
const datatypeEnumValue = ref('spring')

const modalVisible = ref(false)

const toggleModal = () => {
	modalVisible.value = !modalVisible.value
}
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

.text-with-code {
	display: flex;
	align-items: center;
	gap: 4px;

	code {
		background-color: $gray-light;
		padding: 2px 4px;
		border-radius: $small-radius;
	}
}
</style>
