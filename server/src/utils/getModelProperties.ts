import { AnyModel } from 'models'

const IGNORE_PROPERTIES = ['cmsMetadata']

const getModelProperties = (model: AnyModel) => {
	const properties = Object.getOwnPropertyNames(model).filter(
		property => !IGNORE_PROPERTIES.includes(property)
	)

	return properties
}

export default getModelProperties
