import localeEn from './locales/en'
import localeNl from './locales/nl'

const i18n = {
	en: localeEn,
	nl: localeNl,
}

export const supportedLocales = Object.keys(i18n)

export default i18n
