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
		retrieveListError: string
		uploadNoValidAssetInBody: string
		uploadUnsupportedMimetype: string
		uploadError: string
	}
	global: {
		unexpectedServerError: string
	}
}

export default LocaleMessages
