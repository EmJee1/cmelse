import { NextFunction, Request, Response } from 'express'
import { supportedLocales } from '../i18n'

const { FALLBACK_LOCALE } = process.env

/**
 * Sets locale on the request object. It uses the 'accept-language'
 * header to determine the expected locale. If no supported locale value gets passed
 * in that header it uses the environment variable 'FALLBACK_LOCALE'.
 */
const setLocale = async (req: Request, res: Response, next: NextFunction) => {
	let locale = req.headers['accept-language'] || FALLBACK_LOCALE

	if (locale.includes('-')) {
		[locale] = locale.split('-')
	}

	// use fallback locale if requested locale is not supported
	if (!supportedLocales.includes(locale)) {
		locale = FALLBACK_LOCALE
	}

	req.locale = locale

	next()
}

export default setLocale
