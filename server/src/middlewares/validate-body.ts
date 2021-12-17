import { NextFunction, Request, Response } from 'express'
import { Model } from 'models/interfaces/interfaces'
import { IDatatype } from 'datatypes/interfaces/interfaces'
import getModelProperties from '../utils/getModelProperties'

const validateBody = (model: Model) => {
	const modelProperties = getModelProperties(model)

	return (req: Request, res: Response, next: NextFunction) => {
		const validated = modelProperties.every(property => {
			// const value = req.body[property]
			const prop = model[property] as IDatatype
			console.log(prop)

			return true
		})

		console.log(validated)

		next()
	}
}

export default validateBody
