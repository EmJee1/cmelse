type LocaleMessages = {
	authentication: {
		register: {
			usernameAlreadyExists: string
			emailAlreadyExists: string
		}
		login: {
			incorrectIdentifier: string
			incorrectPassword: string
		}
	}
	assets: {
		uploadNoValidAssetInBody: string
		uploadUnsupportedMimetype: string
	}
	global: {
		unexpectedServerError: string
	}
}

export default LocaleMessages
