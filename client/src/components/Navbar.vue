<template>
	<nav class="navbar">
		<router-link to="/" class="navbar_item">
			<i class="bi bi-house" />
			Home
		</router-link>
		<p to="/models" class="navbar_item">
			<i class="bi bi-collection" />
			Models
		</p>
		<ul class="navbar_subitems">
			<li v-for="model in models">
				<router-link :to="`/models/${model.cmsMetadata.collection}`" class="navbar_subitem">
					<i class="bi bi-triangle-fill" />
					{{ model.cmsMetadata.title }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
import models from 'models'
</script>

<style lang="scss" scoped>
$navbar-padding-left: 30px;
$navbar-width: 180px;

.navbar {
	position: fixed;
	display: block;
	top: 0;
	left: 0;
	bottom: 0;
	background-color: $black;
	padding: 30px 12px 30px $navbar-padding-left;
	width: 100%;

	&_item,
	&_subitem {
		color: $white;
		text-decoration: none;
		font-weight: 500;
		font-size: rem(16px);
		line-height: 1.4;
		display: flex;
		gap: 8px;
		margin-bottom: 12px;
	}

	&_subitems {
		list-style-type: none;
		padding-left: 0;
	}

	&_subitem {
		font-size: rem(14px);
		position: relative;
		padding: 5px 14px 5px 0;
		margin-bottom: 0;
		gap: 14px;

		& > i {
			transform: rotate(90deg);
			font-size: rem(8px);
		}

		&::before {
			content: '';
			transition: $transition;
			transition-property: transform, background-color;
			border-radius: 0 80px 80px 0;
			position: absolute;
			top: 0;
			height: 100%;
			left: -#{$navbar-padding-left};
			width: calc(100% + $navbar-padding-left);
			background-color: transparentize($purple, 0.6);
			transform: translateX(-100%);
			z-index: -1;
		}

		&:hover::before {
			transform: translateX(0);
		}

		&.router-link-active::before {
			transform: translateX(0);
			background-color: $purple;
		}
	}

	@media ($mq-tablet) {
		width: $navbar-width;

		&_subitem::before {
			transform: translateX(-#{$navbar-width});
		}
	}
}
</style>
