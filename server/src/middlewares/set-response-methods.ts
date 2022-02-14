import { NextFunction, Request, Response } from 'express'
import getLocalizedMessage from '../utils/get-localized-message'
import i18n from '../i18n'

/**
 * Adds error method to response object for more standardized error responses
 */
const setResponseMethods = async (req: Request, res: Response, next: NextFunction) => {
	res.error = (message, additionalData) => {
		res.json({ ...additionalData, err: getLocalizedMessage(i18n, req.locale, message) })
	}

	next()
}

export default setResponseMethods
