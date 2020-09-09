import translations from '../../../constants/translations'

export const TYPES_LANG = {

}

const default_state = {
    languages: [
        {
            lang_key: 'en',
            lang_label: 'English',
        },
    ],
    translations,
}

export const reducer_locale = (state = default_state, action) => {
    switch (action.type) {
        default:
            return state
    }
}