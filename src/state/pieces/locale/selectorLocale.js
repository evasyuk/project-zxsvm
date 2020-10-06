import { createSelector } from 'reselect'

import { flattenMessages } from '../../../helpers/flattenMessages'

export const getFlatTranslations = createSelector(
  (state) => state.locale,
  (locale) => locale.translations,
  ({ translations }) => flattenMessages(translations),
)
