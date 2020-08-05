export const TYPES_LANG = {

}

const default_state = {
    lang: 'en',
    translations: {
        login: {
            welcome: 'Welcome!',
            email_hint: 'Email',
            password_hint: 'Password',
            submit: 'Submit'
        }
    }
}

export const reducer_locale = (state = default_state, action) => {
    switch (action.type) {
        default:
            return state
    }
}