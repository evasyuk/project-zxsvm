import { logout, LOGOUT_TYPE } from '../auth'

import { getApiTypes } from '../../../helpers/getApiMiddlewareTypes'
import { onActionFailure } from '../../../helpers/onActionFailure'
import { showSuccessNotification } from '../notification'
import { defaultStateModal } from '../modals'

const CHANGE_PWD_TYPES = {
  REQUEST: 'change_pwd_started',
  SUCCESS: 'change_pwd_success',
  FAILURE: 'change_pwd_failure',
}

const DELETE_ACC_TYPES = {
  REQUEST: 'delete_acc_started',
  SUCCESS: 'delete_acc_success',
  FAILURE: 'delete_acc_failure',
}

const DELETE_PHOTO_TYPES = {
  REQUEST: 'delete_photo_started',
  SUCCESS: 'delete_photo_success',
  FAILURE: 'delete_photo_failure',
}

const UPLOAD_PHOTO_TYPES = {
  REQUEST: 'upload_photo_started',
  SUCCESS: 'upload_photo_success',
  FAILURE: 'upload_photo_failure',
}

export const TYPES_USERS = {
  SET_MY_USER: 'set_my_user',

  CHANGE_PWD: CHANGE_PWD_TYPES,
  DELETE_ACC: DELETE_ACC_TYPES,

  DELETE_PHOTO: DELETE_PHOTO_TYPES,
  UPLOAD_PHOTO: UPLOAD_PHOTO_TYPES,
}

export const defaultStateUsers = {
  myUser: null,

  requestInProgress: false,
}

export const setMyUser = (userRecord) => ({
  type: TYPES_USERS.SET_MY_USER,
  update: { myUser: userRecord },
})

export const changePassword = (password, callbacks) => ({
  types: getApiTypes(CHANGE_PWD_TYPES),
  promise: (api) => api.users.changePassword({ password }),
  callbacks,
})

export const deleteAccount = (callbacks) => ({
  types: getApiTypes(DELETE_ACC_TYPES),
  promise: (api) => api.users.deleteMyUser(),
  callbacks,
})

export const deletePhoto = (callbacks) => ({
  types: getApiTypes(DELETE_PHOTO_TYPES),
  promise: (api) => api.users.deletePhoto(),
  callbacks,
})

export const uploadPhoto = (data, callbacks) => ({
  types: getApiTypes(UPLOAD_PHOTO_TYPES),
  promise: (api) => api.users.uploadPhoto(data),
  callbacks,
})

export const reducerUsers = (state = defaultStateUsers, action) => {
  switch (action.type) {
    case TYPES_USERS.UPLOAD_PHOTO.REQUEST:
    case TYPES_USERS.DELETE_PHOTO.REQUEST:
    case TYPES_USERS.DELETE_ACC.REQUEST:
    case TYPES_USERS.CHANGE_PWD.REQUEST:
      return {
        ...state,
        requestInProgress: true,
      }
    case TYPES_USERS.UPLOAD_PHOTO.SUCCESS:
      action.asyncDispatch(
        showSuccessNotification({ message: 'SUCCESS.PHOTO_UPDATED' }),
      )
      if (action?.callbacks?.onSuccess) {
        action.asyncDispatch(action.callbacks.onSuccess)
      }

      action.asyncDispatch(setMyUser(action.data.userRecord))
      return {
        ...state,
        ...action.update,
        requestInProgress: false,
      }
    case TYPES_USERS.DELETE_PHOTO.SUCCESS:
      action.asyncDispatch(
        showSuccessNotification({ message: 'SUCCESS.PHOTO_DELETED' }),
      )
      if (action?.callbacks?.onSuccess) {
        action.asyncDispatch(action.callbacks.onSuccess)
      }

      action.asyncDispatch(
        setMyUser({
          ...state.myUser,
          photoURL: null,
        }),
      )

      return {
        ...state,
        requestInProgress: false,
      }
    case TYPES_USERS.DELETE_ACC.SUCCESS:
      action.asyncDispatch(logout())
      return {
        ...state,
        requestInProgress: false,
      }
    case TYPES_USERS.CHANGE_PWD.SUCCESS:
      action.asyncDispatch(
        showSuccessNotification({ message: 'SUCCESS.PWD_CHANGED' }),
      )
      if (action?.callbacks?.onSuccess) {
        action.asyncDispatch(action.callbacks.onSuccess)
      }
      return {
        ...state,
        requestInProgress: false,
      }
    case TYPES_USERS.DELETE_PHOTO.FAILURE:
    case TYPES_USERS.UPLOAD_PHOTO.FAILURE:
    case TYPES_USERS.DELETE_ACC.FAILURE:
    case TYPES_USERS.CHANGE_PWD.FAILURE:
      if (action?.callbacks?.onFailure) {
        action.asyncDispatch(action.callbacks.onFailure)
      } else {
        onActionFailure(action)
      }

      return {
        ...state,
        requestInProgress: false,
      }
    case TYPES_USERS.SET_MY_USER:
      return {
        ...state,
        ...action.update,
      }
    case LOGOUT_TYPE:
      return defaultStateModal
    default:
      return state
  }
}
