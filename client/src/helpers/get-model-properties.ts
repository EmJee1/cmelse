// TODO: use a global version instead of duplicate in server and client directory

import { Model } from 'models/interfaces/interfaces'

const IGNORE_PROPERTIES = ['cmsMetadata']

const getModelProperties = (model: Model) => {
	const properties = Object.getOwnPropertyNames(model).filter(
		property => !IGNORE_PROPERTIES.includes(property)
	)

	return properties
}

export default getModelProperties
