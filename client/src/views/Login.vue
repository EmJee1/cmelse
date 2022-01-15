<template>
	<div class="wrapper">
		<div class="login-wrapper">
			<h1>Brouwerij Hertog Jan</h1>

			<Input
				:value="username"
				type="text"
				placeholder="username or email"
				border_radius="big"
				width="654px"
			/>

			<Input
				:value="password"
				type="password"
				placeholder="password"
				border_radius="big"
				width="654px"
			/>

			<IconButton icon="bi bi-alarm">Primary icon button</IconButton>
			<IconButton icon="bi bi-alarm" error>
				Primary icon button
			</IconButton>
			<IconButton icon="bi bi-alarm" disabled>
				Primary icon button
			</IconButton>

			<Button shape="round" value="Login" width="220px" />

			<div class="third-party-auth-wrapper">
				<hr />

				<h4>Or</h4>
				<h4>sign in with a authentication provider</h4>

				<img
					title="service currently unavaileble"
					src="../assets\authProvidersIcons.png"
					alt="icons"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import IconButton from '../components/IconButton.vue'

export default {
	name: 'login',
	components: { Input, Button, IconButton },
}
</script>

<style lang="scss" scoped>
.wrapper {
	background: url('../assets/login-background.png');
	background-position: right;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 100vh;

	.login-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		border-radius: $big-radius;
		position: absolute;
		top: 100px;
		left: 100px;
		background-color: $gray-light;
		width: 777px;
		height: 700px;

		h1 {
			margin: 0;
		}

		.third-party-auth-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 200px;

			hr {
				width: 654px;
			}

			h4 {
				margin: 0;
				font: normal normal 300 20px Dosis;
				color: #17141a65;

				&:first-of-type {
					position: absolute;
					top: 468px;
					background: $gray-light;
					padding: 0 12px;
				}
			}

			img {
				margin: 35px 0 0 0;
			}
		}
	}
}
</style>
