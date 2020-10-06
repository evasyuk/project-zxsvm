import { createSelector } from 'reselect'

export const getLoadingStatus = createSelector(
  (state) => ({
    loading: state.loading,
    auth: state.auth,
  }),
  ({ loading, auth }) => loading.is_loading || auth.requestInProgress,
)
