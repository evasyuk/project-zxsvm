import { createSelector } from 'reselect'

import { flattenMessages } from '../../helpers/flattenMessages'

export const getThemeStyles = createSelector(
    state => state.theme,
    theme => theme.colors,
)

export const getNotificationMessage = () => {}

export const getLoadingStatus = createSelector(
    state => state.loading,
    status => status.is_loading,
)

export const getFlatTranslations = createSelector(
    state => state.locale,
    locale => flattenMessages(locale)
)

export const getIsLoggedInStatus = () => false
