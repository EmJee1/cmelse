<template>
	<div>
		<button
			class="round-button"
			v-if="shape == 'round'"
			:style="`width: ${width};`"
		>
			{{ value }}
		</button>
		<button
			v-else
			class="icon-button"
			:class="`type-${type}`"
			:style="`width: ${width};`"
		>
			<i :class="`bi bi-${type == 'error' ? 'trash2' : 'save'}`"></i>
			<div v-show="value" class="button-text">{{ value }}</div>
		</button>
	</div>
</template>

<script>
export default {
	name: 'button',
	props: {
		value: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'primary',
		},
		width: {
			type: String,
			default: '',
		},
		shape: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss">
@import '../assets/style.scss';

.type-primary {
	color: $purple;

	&:hover {
		box-shadow: 0px 3px 8px $purple;
	}
}
.type-error {
	color: $red;

	&:hover {
		box-shadow: 0px 3px 8px $red;
	}
}

.round-button {
	font: normal normal bold 20px Dosis;
	color: white;
	background: $purple;
	padding: 12px;
	min-width: 100px;
	border: none;
	box-shadow: 0px 3px 6px #00000029;
	transition: 0.4s;
	border-radius: 40px;

	&:active {
		transform: scale(0.92);
	}
}

.icon-button {
	box-shadow: 0px 3px 6px #00000029;
	display: flex;
	border: none;
	background: $white;
	padding: 10px;
	border-radius: $small-radius;
	transition: 0.4s;

	i {
		padding: 0 7px 0 0;
	}

	.button-text {
	}

	&:active {
		transform: scale(0.92);
	}
}
</style>
