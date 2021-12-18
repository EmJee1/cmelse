import { NextFunction, Request, Response } from 'express'
import { Model } from 'models/interfaces/interfaces'
import { IDatatype } from 'datatypes/interfaces/interfaces'
import getModelProperties from '../utils/getModelProperties'

/**
 * Express middleware to validate a json request body by Joi validation set in the model.
 * @param {Model} Model - Model parameter to check against body
 */
const validateBody = (model: Model) => {
	const modelProperties = getModelProperties(model)

	return (req: Request, res: Response, next: NextFunction) => {
		const requestValid = modelProperties.every(property => {
			const item = req.body[property]
			const datatype = model[property] as IDatatype

			const result = datatype.options.validationSchema.validate(item)

			// update body parameter to the parsed variant from Joi
			// Joi automatically parses compatible types
			// e.g. "5" > 5 if expected type is number
			req.body[property] = result.value

			return !result.error
		})

		if (!requestValid) {
			res.json({ err: 'Invalid request data' }).status(400)
			return
		}

		next()
	}
}

export default validateBody
