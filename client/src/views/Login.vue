<template>
	<div class="login-page">
		<main class="login-page_card">
			<!-- TODO: Get CMS company name from configuration file -->
			<h2 class="login-page_brand">Brouwerij Hertog Jan</h2>
			<Form @submit.prevent="onSubmit">
				<Input
					v-model="identifier"
					autocomplete="username"
					:label="{ id: 'identifier', text: 'username or email' }"
					placeholder="someone@example.com"
				/>
				<Input
					v-model="password"
					autocomplete="current-password"
					:label="{ id: 'password', text: 'Password' }"
					placeholder="password"
					type="password"
				/>
				<ButtonPrimary class="form_submit" element="button" type="submit">Log in</ButtonPrimary>
			</Form>
		</main>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import Input from '../components/Input.vue'
import Form from '../components/Form.vue'
import ButtonPrimary from '../components/ButtonPrimary.vue'

const identifier = ref('')
const password = ref('')

const onSubmit = async () => {
	try {
		const { data } = await axios.post('/authentication/login', {
			identifier: identifier.value,
			password: password.value
		})
		// TODO: store logged in user
		// TODO: redirect to dashboard
	} catch (e) {
		// TODO: show error message
	}
}
</script>

<style lang="scss" scoped>
.login-page {
	&_card {
		max-width: 90%;
		margin: 50px auto auto;
		background-color: $gray-light;
		border-radius: $big-radius;
		padding: 30px 26px;

		@media ($mq-tablet) {
			padding: 50px;
			max-width: 600px;
			margin: 100px;
		}
	}

	&_brand {
		text-align: center;
		font-weight: 400;
		font-size: rem(28px);
		margin: 0;

		@media ($mq-tablet) {
			font-size: rem(42px);
		}
	}

	:deep(.form) {
		@include content-spacing-top;
	}
}
</style>
