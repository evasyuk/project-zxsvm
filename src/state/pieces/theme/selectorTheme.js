import { createSelector } from 'reselect'

export const getThemeStyles = createSelector(
  (state) => state.theme,
  (theme) => theme,
)
