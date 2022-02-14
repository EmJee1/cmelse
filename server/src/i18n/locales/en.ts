import LocaleMessages from "../locale";

const localeEn: LocaleMessages = {
    authentication: {
        register: {
            usernameAlreadyExists: 'A user with that username already exists',
            emailAlreadyExists: 'A user with that email already exists'
        },
        login: {
            incorrectIdentifier: 'We do not have an account for that username or email',
            incorrectPassword: 'The supplied password is not valid'
        }
    },
    models: {
        insertError: 'Something went wrong while inserting, please try again',
        updateError: 'Something went wrong while updating, please try again',
        deleteError: 'Something went wrong while deleting, please try again'
    },
    assets: {
        retrieveListError: 'Something went wrong while retrieving the list of assets, please try again',
        uploadNoValidAssetInBody: 'Did not receive a valid asset to upload',
        uploadUnsupportedMimetype: 'The received asset is not of a supported mimetype',
        uploadError: 'Something went wrong while uploading the asset, please try again'
    }
}

export default localeEn
