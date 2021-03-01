/* eslint-disable camelcase */
import { createSelector } from 'reselect'

export const getActiveTranslation = createSelector(
  (state) => state.locale,
  (locale) => {
    const { lang_key } = locale.activeLanguage
    const { lang_label } = locale.activeLanguage

    const dictionary = locale.activeDictionary

    return {
      lang_key,
      lang_label,
      dictionary,
    }
  },
)

export const getAllPossibleLocaleKeyOptions = createSelector(
  (state) => state.locale,
  (locale) => locale.availableLangOptions.map((item) => item.lang_key),
)
