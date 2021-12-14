import { Datatype } from '..'
import db from '../../config/database'

const IGNORE_PROPERTIES = ['collection', 'endpoint']

interface ModelProperties {
	datatype: Datatype
	title: string
	options: { [key: string]: boolean | string | number }
}

export default abstract class BaseModel {
	constructor(collection: string, endpoint?: string) {
		this.collection = collection
		this.endpoint = endpoint ?? `/${collection}`
	}

	public readonly collection: string

	public readonly endpoint: string

	async insertOne(item: { [key: string]: unknown }) {
		return db.collection(this.collection).insertOne(item)
	}

	async fetchAll() {
		return db.collection(this.collection).find().toArray()
	}

	get modelsWithProperties(): ModelProperties[] {
		return (
			Object.getOwnPropertyNames(this)
				.filter(prop => !IGNORE_PROPERTIES.includes(prop))
				// TODO: fix typescript
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				.map(prop => this[prop])
		)
	}
}
