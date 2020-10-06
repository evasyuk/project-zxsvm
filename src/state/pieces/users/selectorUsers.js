import { createSelector } from 'reselect'

export const getMyUser = createSelector(
  (state) => state.users,
  (users) => users.myUser,
)
