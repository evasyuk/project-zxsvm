import { showErrorNotification } from '../notification'

const getApiTypes = (types) => [types.REQUEST, types.SUCCESS, types.FAILURE]

const LOGIN_TYPES = {
  REQUEST: 'login_started',
  SUCCESS: 'login_success',
  FAILURE: 'login_failure',
}

export const TYPES_AUTH = {
  MISSING_AUTH: 'missingAuth',

  LOGIN: LOGIN_TYPES,
}

export const LOGOUT_TYPE = 'logout'

const defaultState = {
  missingAuth: false,
  isLoggedIn: false,

  loginInProgress: false,
  loginErrorMessage: null,

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

export const reducerAuth = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES_AUTH.LOGIN.FAILURE:
      action.asyncDispatch(showErrorNotification(`ERROR.${action.error}`))

      return {
        ...state,
        loginInProgress: false,
        loginErrorMessage: action?.update?.error || 'unexpected login error',
      }
    case TYPES_AUTH.LOGIN.SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { token, userRecord } = action.data

      return {
        ...state,
        missingAuth: false,
        isLoggedIn: true,
        loginInProgress: false,

        token,
        userRecord,
      }
    case TYPES_AUTH.LOGIN.REQUEST:
      return {
        ...state,
        loginInProgress: true,
      }
    case LOGOUT_TYPE:
      return defaultState
    default:
      return state
  }
}
