import {
  availableLangOptions,
  allPossibleDictionaries,
} from '../../../constants/translations'

export const TYPES_LANG = {
  SET_LOCALE: 'SET_LOCALE',
}

const defaultState = {
  availableLangOptions,
  allPossibleDictionaries,

  activeLanguage: availableLangOptions[0],
  activeDictionary: allPossibleDictionaries[0],
}

// TODO: restructure data for faster lookup
const getDictionaryBasedOnKey = (key) => {
  let indexLookup

  allPossibleDictionaries.forEach((item, index) => {
    if (key === item.lang_key) {
      indexLookup = index
    }
  })
  return {
    activeLanguage: availableLangOptions[indexLookup || 0],
    activeDictionary: allPossibleDictionaries[indexLookup || 0],
  }
}

export const actionSetActiveLocaleByKey = (key) => () => ({
  type: TYPES_LANG.SET_LOCALE,
  update: { key },
})

export const reducerLocale = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES_LANG.SET_LOCALE:
      return {
        ...state,

        ...getDictionaryBasedOnKey(action.update.key),
      }
    default:
      return state
  }
}
