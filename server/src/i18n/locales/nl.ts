const localeNl: LocaleMessages = {
    authentication: {
        register: {
            usernameAlreadyExists: 'Er bestaat al een gebruiker met die gebruikersnaam',
            emailAlreadyExists: 'Er bestaat al een gebruiker met dat e-mailadres'
        },
        login: {
            incorrectIdentifier: 'We hebben geen account voor die gebruikersnaam of email',
            incorrectPassword: 'Het ingevulde wachtwoord is niet juist'
        }
    },
    models: {
        insertError: 'Er ging iets fout bij het toevoegen, probeer het alsjeblieft opnieuw',
        updateError: 'Er ging iets fout bij het aanpassen, probeer het alsjeblieft opnieuw',
        deleteError: 'Er ging iets fout bij het verwijderen, probeer het alsjeblieft opnieuw'
    },
    assets: {
        retrieveListError: 'Er ging iets fout bij het ophalen van de asset lijst, probeer het alsjeblieft opnieuw',
        uploadNoValidAssetInBody: 'Er is geen geldige asset gestuurd',
        uploadUnsupportedMimetype: 'De gestuurde asset heeft geen ondersteund mimetype',
        uploadError: 'Er ging iets fout bij het opslaan van de asset, probeer het alsjeblieft opnieuw'
    }
}

export default localeNl
