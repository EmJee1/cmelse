<template>
	<div class="login-page">
		<main class="login-page_card">
			<!-- Get CMS company name from configuration file -->
			<h2 class="heading-2 login-page_brand">Brouwerij Hertog Jan</h2>
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
import Input from '../components/Input.vue'
import Form from '../components/Form.vue'
import ButtonPrimary from '../components/ButtonPrimary.vue'

const identifier = ref('')
const password = ref('')

const onSubmit = () => {}
</script>

<style lang="scss" scoped>
.login-page {
	&_card {
		display: inline-block;
		background-color: $gray-light;
		border-radius: $big-radius;
		padding: 50px 60px;
	}

	&_brand {
		text-align: center;
		font-weight: 400;
	}
}
</style>
