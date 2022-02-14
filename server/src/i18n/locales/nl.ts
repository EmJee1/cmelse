import LocaleMessages from '../locale'

const localeNl: LocaleMessages = {
	authentication: {
		register: {
			usernameAlreadyExists: 'Er bestaat al een gebruiker met die gebruikersnaam',
			emailAlreadyExists: 'Er bestaat al een gebruiker met dat e-mailadres',
		},
		login: {
			incorrectIdentifier: 'We hebben geen account voor die gebruikersnaam of email',
			incorrectPassword: 'Het ingevulde wachtwoord is niet juist',
		},
	},
	assets: {
		uploadNoValidAssetInBody: 'Er is geen geldige asset gestuurd',
		uploadUnsupportedMimetype: 'De gestuurde asset heeft geen ondersteund mimetype',
	},
	global: {
		unexpectedServerError: 'Er ging iets fout, probeer het alsjeblieft opnieuw',
	},
}

export default localeNl
