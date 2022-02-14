import { NextFunction, Request, Response } from 'express'

const { FALLBACK_LOCALE } = process.env

/**
 * Sets locale on the request object. It uses the 'accept-language'
 * header to determine the expected locale. If no value gets passed
 * in that header it uses the environment variable 'FALLBACK_LOCALE'.
 */
const setLocale = async (req: Request, res: Response, next: NextFunction) => {
	req.locale = req.headers['accept-language'] || FALLBACK_LOCALE
	next()
}

export default setLocale