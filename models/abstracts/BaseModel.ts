interface IBaseModel {
	endpoint?: string
	title?: string
}

export interface ICmsMetadata extends Required<IBaseModel> {
	collection: string
}

/**
 * All models should extend from this class.
 * Adds cms metadata like the mongodb collection
 */
export default abstract class BaseModel {
	constructor(collection: string, options: IBaseModel = {}) {
		const endpoint = options.endpoint ?? `/${collection}`
		const title = options.title ?? collection

		this.cmsMetadata = { collection, endpoint, title }
	}

	public readonly cmsMetadata: ICmsMetadata
}
