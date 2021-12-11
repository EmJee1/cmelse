export default abstract class BaseModel {
	constructor(table: string) {
		this.table = table
	}

	private readonly table: string
}
