<template>
	<Text
		v-if="datatype.datatype === Datatype.Text"
		v-bind="$attrs"
		:validation-schema="datatype.options.validationSchema"
		:multiline="datatype.options.multiline"
	/>
	<Numeral
		v-if="datatype.datatype === Datatype.Numeral"
		v-bind="$attrs"
		:validation-schema="datatype.options.validationSchema"
	/>
	<Toggle
		v-if="datatype.datatype === Datatype.Toggle"
		v-bind="$attrs"
		:validation-schema="datatype.options.validationSchema"
	/>
	<Enum
		v-if="datatype.datatype === Datatype.Enum"
		v-bind="$attrs"
		:validation-schema="datatype.options.validationSchema"
		:items="datatype.options.items"
		:name="datatype.options.databaseKey!"
	/>
</template>

<script lang="ts" setup>
import { IDatatype } from 'datatypes/interfaces/interfaces'
import { Datatype } from 'models'
import Text from './Text.vue'
import Numeral from './Numeral.vue'
import Toggle from './Toggle.vue'
import Enum from './Enum.vue'

defineProps<{
	datatype: IDatatype
}>()
</script>
