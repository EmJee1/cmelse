<template>
	<LoginShapesWhite class="login-page_white-shapes" />
	<div class="login-page">
		<main class="login-page_card">
			<!-- TODO: Get CMS company name from configuration file -->
			<h2 class="login-page_brand">Brouwerij Hertog Jan</h2>
			<Form @submit.prevent="onSubmit">
				<Notice v-if="error" type="error">{{ error }}</Notice>
				<Input
					v-model="identifier"
					ref="identifierInput"
					autocomplete="username"
					:label="{ id: 'identifier', text: 'Username or email' }"
					placeholder="someone@example.com"
					:validation-schema="Joi.string().required()"
				/>
				<Input
					v-model="password"
					ref="passwordInput"
					autocomplete="current-password"
					:label="{ id: 'password', text: 'Password' }"
					placeholder="password"
					type="password"
					:validation-schema="Joi.string().required()"
				/>
				<div class="form_actions">
					<ButtonPrimary element="button" type="submit">Log in</ButtonPrimary>
					<ButtonLink element="router-link" to="/forgot-password">
						Forgot password
					</ButtonLink>
				</div>
			</Form>
		</main>
		<div class="login-page_copyright">
			<h4 class="login-page_copyright-title">cmelse &copy;</h4>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import axios, { AxiosError } from 'axios'
import Joi from 'joi'
import useForm from '../composables/use-form'
import loggedInUser from '../stores/user-store'
import Input from '../components/Input.vue'
import Form from '../components/Form.vue'
import ButtonPrimary from '../components/ButtonPrimary.vue'
import ButtonLink from '../components/ButtonLink.vue'
import Notice from '../components/Notice.vue'
import LoginShapesWhite from '../assets/icons/login-shapes-white.svg'

const identifier = ref('')
const password = ref('')

const identifierInput = ref<InstanceType<typeof Input>>()
const passwordInput = ref<InstanceType<typeof Input>>()

const { formValidate, error } = useForm([identifierInput, passwordInput])

onMounted(() => {
	document.body.style.backgroundColor = '#17141a'
})

onBeforeUnmount(() => {
	document.body.style.backgroundColor = '#fff'
})

const onSubmit = () => {
	error.value = undefined

	if (!formValidate()) {
		error.value = 'Please review all fields'
		return
	}

	axios
		.post('/authentication/login', {
			identifier: identifier.value,
			password: password.value,
		})
		.then(({ data }) => {
			loggedInUser.value = data
		})
		.catch((err: AxiosError) => {
			error.value = err.response?.data.err
		})
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
		box-shadow: $shadow;

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

	&_copyright {
		position: fixed;
		bottom: 0;
		right: 0;

		&-title {
			margin-bottom: 10px;
			margin-right: 20px;
			font-size: 6vw;
			color: $black;
		}
	}

	&_white-shapes {
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: -1;
		max-height: 50%;
	}
}
</style>
