import { createSelector } from 'reselect'

export const getLoadingStatus = createSelector(
  (state) => ({
    loading: state.loading,
    auth: state.auth,
    users: state.users,
  }),
  ({ loading, auth, users }) =>
    loading.is_loading || auth.requestInProgress || users.requestInProgress,
)
