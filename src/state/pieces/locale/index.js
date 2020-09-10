import translations from '../../../constants/translations'

export const TYPES_LANG = {}

const defaultState = {
  languages: [
    {
      lang_key: 'en',
      lang_label: 'English',
    },
  ],
  translations,
}

export const reducerLocale = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
