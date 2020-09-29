const NOTIFICATION_TYPES = {
  ERROR: 'error',
  DEFAULT: 'default',
}

export const NOTIFICATION_ACTION_TYPES = {
  SHOW: 'notification_show',
  CLEAR_ALL: 'notification_clear_all',
}

const defaultState = {
  messageQueue: [],
}

export const showErrorNotification = (message, id = 'error') => ({
  type: NOTIFICATION_ACTION_TYPES.SHOW,
  update: { message, notificationType: NOTIFICATION_TYPES.DEFAULT, id },
})

export const clearAllNotifications = () => ({
  type: NOTIFICATION_ACTION_TYPES.CLEAR_ALL,
})

// TODO: implement "remove specific notification by id"

export const reducerNotifications = (state = defaultState, action) => {
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPES.SHOW:
      // eslint-disable-next-line no-case-declarations
      const messageQueue = []
      messageQueue.push(action.update)
      return {
        ...state,
        messageQueue,
      }
    case NOTIFICATION_ACTION_TYPES.CLEAR_ALL:
      return {
        ...state,
        messageQueue: [],
      }
    default:
      return state
  }
}
