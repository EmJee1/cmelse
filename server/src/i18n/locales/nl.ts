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
		retrieveListError:
			'Er ging iets fout bij het ophalen van de asset lijst, probeer het alsjeblieft opnieuw',
		uploadNoValidAssetInBody: 'Er is geen geldige asset gestuurd',
		uploadUnsupportedMimetype: 'De gestuurde asset heeft geen ondersteund mimetype',
		uploadError:
			'Er ging iets fout bij het opslaan van de asset, probeer het alsjeblieft opnieuw',
	},
	global: {
		unexpectedServerError: 'Something went wrong, please try again',
	},
}

export default localeNl
