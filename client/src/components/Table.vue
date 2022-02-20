<template>
	<table class="table" v-if="data">
		<thead class="table_head">
			<tr class="table_row">
				<th v-for="column in computedColumns" :key="column" class="table_data">
					{{ column.displayName }}
				</th>
			</tr>
		</thead>
		<tbody class="table_body">
			<tr v-for="(row, index) in data" :key="index" class="table_row">
				<td v-for="column in computedColumns" :key="column.key" class="table_data">
					{{ row[column.key] }}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface IColumns {
	displayName: string
	key: string
}

const props = defineProps<{
	data?: { [key: string]: unknown }[]
	columns?: IColumns[]
}>()

const computedColumns = computed<null | IColumns[]>(() => {
	if (props.columns) {
		return props.columns
	}

	if (!props.data) {
		return null
	}

	return Object.keys(props.data[0]).map(key => ({
		displayName: key,
		key,
	}))
})
</script>

<style lang="scss" scoped>
.table {
	width: 100%;
	border-collapse: separate;
	border-spacing: 0 10px;

	&_data {
		font-size: rem(16px);
		font-weight: 300;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 20rem;
		padding: 10px 8px;
	}

	&_head &_data {
		font-weight: 600;
		padding-bottom: 10px;
	}

	&_body &_row {
		font-weight: 400;
		font-size: rem(14px);
		margin-bottom: 8px;
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
