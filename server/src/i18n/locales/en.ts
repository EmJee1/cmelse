import LocaleMessages from '../locale'

const localeEn: LocaleMessages = {
	authentication: {
		register: {
			usernameAlreadyExists: 'A user with that username already exists',
			emailAlreadyExists: 'A user with that email already exists',
		},
		login: {
			incorrectIdentifier: 'We do not have an account for that username or email',
			incorrectPassword: 'The supplied password is not valid',
		},
		token: {
			notSent: 'Authentication token is required',
			protocolBearer: 'Token should be of type bearer',
			invalid: 'The token is not valid',
		},
	},
	assets: {
		uploadNoValidAssetInBody: 'Did not receive a valid asset to upload',
		uploadUnsupportedMimetype: 'The received asset is not of a supported mimetype',
	},
	global: {
		unexpectedServerError: 'Something went wrong, please try again',
	},
}

export default localeEn
