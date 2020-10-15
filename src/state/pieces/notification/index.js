import {LOGOUT_TYPE} from "../auth";
import {defaultStateModal} from "../modals";

const NOTIFICATION_TYPES = {
  ERROR: 'error',
  DEFAULT: 'default',
  SUCCESS: 'success',
}

export const NOTIFICATION_ACTION_TYPES = {
  SHOW: 'notification_show',
  CLEAR_ALL: 'notification_clear_all',
}

const defaultState = {
  messageQueue: [],
}

export const showSuccessNotification = ({
  message,
  id = 'success',
  type = NOTIFICATION_TYPES.SUCCESS,
  i8nRequired = true,
}) => _showErrorNotification(message, id, type, i8nRequired)

export const showErrorNotification = ({
  message,
  id = 'error',
  type = NOTIFICATION_TYPES.ERROR,
  i8nRequired = true,
}) => _showErrorNotification(message, id, type, i8nRequired)

// eslint-disable-next-line no-underscore-dangle
const _showErrorNotification = (
  message,
  id = 'error',
  type = NOTIFICATION_TYPES.ERROR,
  i8nRequired = true,
) => ({
  type: NOTIFICATION_ACTION_TYPES.SHOW,
  update: {
    message,
    notificationType: NOTIFICATION_TYPES.DEFAULT,
    id,
    type,
    i8nRequired,
  },
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
    case LOGOUT_TYPE:
      return defaultStateModal
    default:
      return state
  }
}
