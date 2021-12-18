import { ICmsMetadata, IBaseModelOptions } from '../interfaces/interfaces'

/**
 * All models should extend from this class.
 * Adds cms metadata like the mongodb collection
 */
export default abstract class BaseModel {
	constructor(collection: string, options: IBaseModelOptions = {}) {
		const endpoint = options.endpoint ?? `/${collection}`
		const title = options.title ?? collection

		this.cmsMetadata = { collection, endpoint, title }
	}

	public readonly cmsMetadata: ICmsMetadata
}
