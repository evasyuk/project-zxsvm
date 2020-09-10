import { createSelector } from 'reselect'

import { flattenMessages } from '../../helpers/flattenMessages'

export const getThemeStyles = createSelector(
  (state) => state.theme,
  (theme) => theme,
)

export const getNotificationMessage = () => {}

export const getLoadingStatus = createSelector(
  (state) => state.loading,
  (status) => status.is_loading,
)

export const getFlatTranslations = createSelector(
  (state) => state.locale,
  (locale) => locale.translations,
  ({ translations }) => flattenMessages(translations),
)

export const getIsLoggedInStatus = () => false
