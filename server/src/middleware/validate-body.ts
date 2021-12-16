import { NextFunction, Request, Response } from 'express'
import { Model } from 'models'

const validateBody = (Item: Model) => {
	const properties = new Item().modelsWithProperties

	console.log(properties)

	return (req: Request, res: Response, next: NextFunction) => {
		next()
	}
}

export default validateBody
