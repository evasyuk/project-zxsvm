import { createSelector } from 'reselect'

export const getNotificationsQueue = createSelector(
  (state) => state.notifications,
  (notifications) => notifications.messageQueue,
)
