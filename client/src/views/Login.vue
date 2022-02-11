<template>
	<div class="login-page">
		<main class="login-page_card">
			<!-- TODO: Get CMS company name from configuration file -->
			<h2 class="login-page_brand">Brouwerij Hertog Jan</h2>
			<Form @submit.prevent="onSubmit">
				<Input
					v-model="identifier"
					autocomplete="username"
					:label="{ id: 'identifier', text: 'Username or email' }"
					placeholder="someone@example.com"
				/>
				<Input
					v-model="password"
					autocomplete="current-password"
					:label="{ id: 'password', text: 'Password' }"
					placeholder="password"
					type="password"
				/>
				<div class="form_actions">
					<ButtonPrimary element="button" type="submit">Log in</ButtonPrimary>
					<ButtonLink element="router-link" to="/forgot-password">
						Forgot password
					</ButtonLink>
				</div>
			</Form>
		</main>
	</div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import axios from 'axios'
import loggedInUser from '../stores/user-store'
import Input from '../components/Input.vue'
import Form from '../components/Form.vue'
import ButtonPrimary from '../components/ButtonPrimary.vue'
import ButtonLink from '../components/ButtonLink.vue'

const identifier = ref('')
const password = ref('')

onMounted(() => {
	document.querySelector('body')!.style.backgroundColor = '#17141a'
})

onBeforeUnmount(() => {
	document.querySelector('body')!.style.backgroundColor = '#fff'
})

const onSubmit = async () => {
	try {
		const { data } = await axios.post('/authentication/login', {
			identifier: identifier.value,
			password: password.value,
		})
		loggedInUser.value = data
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
