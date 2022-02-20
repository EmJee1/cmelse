<template>
	<table class="table" v-if="data">
		<thead class="table_head">
			<tr class="table_row">
				<th v-for="column in columns" :key="column" class="table_data">
					{{ column }}
				</th>
			</tr>
		</thead>
		<tbody class="table_body">
			<tr v-for="(row, index) in data" :key="index" class="table_row">
				<td v-for="column in columns" :key="column" class="table_data">
					{{ row[column] }}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
	data?: { [key: string]: unknown }[]
}>()

const columns = computed(() => {
	if (!props.data) {
		return null
	}

	return Object.keys(props.data[0])
})
</script>

<style lang="scss" scoped>
.table {
	width: 100%;
	border-collapse: collapse;

	&_head &_data {
		font-weight: 600;
		font-size: rem(16px);
		padding-bottom: 10px;
	}

	&_data {
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 20rem;
		padding: 15px 8px;
	}

	&_body &_row {
		font-weight: 400;
		font-size: rem(14px);
	}

	&_body &_data {
		background-color: $gray-light;

		&:first-child {
			border-radius: 90px 0 0 90px;
		}

		&:last-child {
			border-radius: 0 90px 90px 0;
		}
	}
}
</style>
