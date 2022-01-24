<template>
	<nav class="navbar">
		<router-link to="/" class="navbar_item">
			<i class="bi bi-house" />
			Home
		</router-link>
		<router-link to="/models" class="navbar_item">
			<i class="bi bi-collection" />
			Models
		</router-link>
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
.navbar {
	position: fixed;
	display: block;
	top: 0;
	left: 0;
	bottom: 0;
	background-color: $black;
	color: $white;
	padding: 30px 12px 30px 30px;
	width: 180px;

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
		transition: $transition;
		transition-property: background-color;
		padding: 5px 14px 5px 0;
		border-radius: 0 80px 80px 0;
		margin-bottom: 0;
		gap: 14px;

		& > i {
			transform: rotate(90deg);
			font-size: rem(8px);
		}

		&::before {
			transition: $transition;
			transition-property: background-color;
			content: '';
			position: absolute;
			top: 0;
			left: -100%;
			height: 100%;
			width: 100%;
		}

		&:hover {
			background-color: transparentize($purple, 0.6);

			&::before {
				background-color: transparentize($purple, 0.6);
			}
		}
	}
}
</style>
