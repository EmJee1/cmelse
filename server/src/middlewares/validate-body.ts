import { NextFunction, Request, Response } from 'express'
import { Model } from 'models/interfaces/interfaces'
import { IDatatype } from 'datatypes/interfaces/interfaces'
import getModelProperties from '../utils/getModelProperties'

/**
 * Express middleware to validate a json request body by Joi validation set in the model.
 * @param {Model} Model - Model parameter to check against body
 * @param {boolean} emptyValueIsValid - Validate empty items as true
 */
const validateBody = (model: Model, emptyValueIsValid?: boolean) => {
	const modelProperties = getModelProperties(model)

	return (req: Request, res: Response, next: NextFunction) => {
		const requestValid = modelProperties.every(property => {
			const item = req.body[property]
			const datatype = model[property] as IDatatype

			// if there is no item and the emptyValueIsValid parameter is passed true, validate as true
			// used in update where not all properties should be passed on update
			if (emptyValueIsValid && !item) return true

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