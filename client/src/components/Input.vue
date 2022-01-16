<template>
	<div :style="`width: ${width};`" class="input-wrapper">
		<input
			:name="name"
			v-model="value"
			:type="type"
			:placeholder="placeholder"
			:style="`border-radius: ${
				border_radius == 'big' ? '42px' : '10px'
			};`"
		/>
	</div>
	<div v-show="error" class="error">{{ error }}</div>
</template>

<script>
export default {
	name: 'input',
	props: {
		value: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		error: {
			type: String,
			default: '',
		},
		border_radius: {
			type: String,
			default: 'small',
		},
		width: {
			type: String,
			default: '100px',
		},
	},
}
</script>

<style lang="scss" scoped>
input {
	display: flex;
	border: 2px solid white;
	box-shadow: 0px 3px 6px #00000029;
	padding: 15px 0 20px 30px;
	font-size: 150%;
	width: 100%;

	&::placeholder {
		position: absolute;
		left: 30px;
		top: 7px;
		color: #a7a7a7;
		font: normal normal bold 19px/25px Dosis;
	}
}
</style>
