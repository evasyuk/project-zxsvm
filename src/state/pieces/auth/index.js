export const TYPES_AUTH = {
  LOGIN: 'login',
  MISSING_AUTH: 'missingAuth',
}

const defaultState = {
  missingAuth: false,
  isLoggedIn: false,
}

export const setMissingAuth = () => ({
  type: TYPES_AUTH.MISSING_AUTH,
  update: { missingAuth: true },
})

export const login = () => ({
  type: TYPES_AUTH.LOGIN,
  update: { isLoggedIn: true },
})

export const reducerAuth = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES_AUTH.MISSING_AUTH:
    case TYPES_AUTH.LOGIN:
      return {
        ...state,
        ...action.update,
      }
    default:
      return state
  }
}
