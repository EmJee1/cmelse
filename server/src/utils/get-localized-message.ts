import LocaleMessages from '../i18n/locale'
import logger from '../config/winston'

/**
 * Returns a message in the requested locale
 * @param locales - a dictionary with the keys as locale and value as their responses
 * @param locale - the expected locale
 * @param message - A key-denoted string representing the path to the message
 */
const getLocalizedMessage = (
	locales: { [key: string]: LocaleMessages },
	locale: string,
	message: string
) => {
	if (!locales[locale]) {
		logger.warn(`Localization locale ${locale} is not supported`)
		throw new Error(`Unknown locale ${locale}`)
	}

	const selectedLocale = locales[locale]
	const messageParts = message.split('.')
	const localizedMessage: string = messageParts.reduce((object, key) => {
		// TODO: figure out why typescript is complaining here
		/* eslint-disable-next-line */
		// @ts-ignore
		const part = object[key]

		if (!part) {
			logger.warn(
				`Localization object key ${key} does not exist on locale; full path: ${message}`
			)
			throw new Error(`Object key ${key} does not exist on locale`)
		}

		return part
	}, selectedLocale)

	return localizedMessage
}

export default getLocalizedMessage
