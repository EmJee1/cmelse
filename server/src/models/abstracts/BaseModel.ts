const IGNORE_PROPERTIES = ['table', 'endpoint']

export default abstract class BaseModel {
	constructor(table: string, endpoint?: string) {
		this.table = table
		this.endpoint = endpoint ?? `/${table}`
	}

	public readonly table: string

	public readonly endpoint: string

	get modelProperties() {
		return (
			Object.getOwnPropertyNames(this)
				.filter(prop => !IGNORE_PROPERTIES.includes(prop))
				// @ts-ignore
				.map(prop => this[prop])
		)
	}
}
