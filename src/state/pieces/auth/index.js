import ApiClient from '../../../api/apiClient'

import { setMyUser } from '../users'

import { getApiTypes } from '../../../helpers/getApiMiddlewareTypes'
import { onActionFailure } from '../../../helpers/onActionFailure'

const LOGIN_TYPES = {
  REQUEST: 'login_started',
  SUCCESS: 'login_success',
  FAILURE: 'login_failure',
}

const SIGNUP_TYPES = {
  REQUEST: 'sign_up_started',
  SUCCESS: 'sign_up_success',
  FAILURE: 'sign_up_failure',
}

export const TYPES_AUTH = {
  MISSING_AUTH: 'missingAuth',

  LOGIN: LOGIN_TYPES,
  SIGNUP: SIGNUP_TYPES,
}

export const LOGOUT_TYPE = 'logout'

const defaultState = {
  missingAuth: false,
  isLoggedIn: false,

  requestInProgress: false,

  token: null,
  userRecord: null,
}

export const setMissingAuth = () => ({
  type: TYPES_AUTH.MISSING_AUTH,
  update: { missingAuth: true },
})

export const logout = () => ({
  type: LOGOUT_TYPE,
})

export const login = (email, password) => ({
  types: getApiTypes(LOGIN_TYPES),
  promise: (api) => api.auth.login({ email, password }),
})

export const register = ({ name, email, password, phone }) => ({
  types: getApiTypes(SIGNUP_TYPES),
  promise: (api) => api.auth.register({ name, email, password, phone }),
})

export const reducerAuth = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES_AUTH.SIGNUP.FAILURE:
    case TYPES_AUTH.LOGIN.FAILURE:
      onActionFailure(action)

      return {
        ...state,
        requestInProgress: false,
      }
    case TYPES_AUTH.SIGNUP.SUCCESS:
    case TYPES_AUTH.LOGIN.SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { token, userRecord } = action.data

      action.asyncDispatch(setMyUser(userRecord))

      ApiClient.singleton.setToken(token)

      return {
        ...state,
        missingAuth: false,
        isLoggedIn: true,
        requestInProgress: false,

        token,
      }
    case TYPES_AUTH.SIGNUP.REQUEST:
    case TYPES_AUTH.LOGIN.REQUEST:
      return {
        ...state,
        requestInProgress: true,
      }
    case LOGOUT_TYPE:
      ApiClient.singleton.removeToken()
      return defaultState
    default:
      return state
  }
}
