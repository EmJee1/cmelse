import { NextFunction, Request, Response } from 'express'
import { AnyModel, DatatypeItem } from 'models'
import getModelProperties from '../utils/getModelProperties'

const validateBody = (model: AnyModel) => {
	console.log('Running the validation function')
	const modelProperties = getModelProperties(model)

	console.log(modelProperties)

	return (req: Request, res: Response, next: NextFunction) => {
		const validated = modelProperties.every(property => {
			// const value = req.body[property]
			const prop = model[property] as DatatypeItem
			console.log(prop)

			return true
		})

		console.log(validated)

		next()
	}
}

export default validateBody
