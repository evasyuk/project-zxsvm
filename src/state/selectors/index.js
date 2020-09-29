import { createSelector } from 'reselect'

import { flattenMessages } from '../../helpers/flattenMessages'

export const getThemeStyles = createSelector(
  (state) => state.theme,
  (theme) => theme,
)

export const getNotificationsQueue = createSelector(
  (state) => state.notifications,
  (notifications) => notifications.messageQueue,
)

export const getLoadingStatus = createSelector(
  (state) => ({
    loading: state.loading,
    auth: state.auth,
  }),
  ({ loading, auth }) => loading.is_loading || auth.loginInProgress,
)

export const getFlatTranslations = createSelector(
  (state) => state.locale,
  (locale) => locale.translations,
  ({ translations }) => flattenMessages(translations),
)

export const getIsLoggedInStatus = createSelector(
  (state) => state.auth,
  (auth) => auth.isLoggedIn,
)
