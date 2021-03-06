import { Request, Response, NextFunction } from 'express'
import { ObjectSchema } from 'joi'

/**
 * Express middleware to validate a request by a Joi schema representing the request body.
 * @param {ObjectSchema} schema - Joi schema to check against body
 */
const validateBodySchema =
	(schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
		try {
			const { error } = schema.validate(req.body)

			if (error) throw new Error(error.message)
		} catch (err) {
			res.status(400).json({ err: err.message })
			return
		}

		next()
	}

export default validateBodySchema
