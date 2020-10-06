import { createSelector } from 'reselect'

export const getIsLoggedInStatus = createSelector(
  (state) => state.auth,
  (auth) => auth.isLoggedIn,
)
