import { NextFunction, Request, Response } from 'express'
import { Model } from 'models'

const validateBody = (item: Model) => {
	// TODO: get model properties

	console.log('validating', item)

	return (req: Request, res: Response, next: NextFunction) => {
		next()
	}
}

export default validateBody
