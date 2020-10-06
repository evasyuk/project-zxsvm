import { combineReducers } from 'redux'

import { reducerLoading } from '../pieces/loading'
import { reducerAuth } from '../pieces/auth'
import { reducerTheme } from '../pieces/theme'
import { reducerLocale } from '../pieces/locale'
import { reducerNotifications } from '../pieces/notification'
import { reducerUsers } from '../pieces/users'
import { reducerModals } from '../pieces/modals'

const reducers = {
  loading: reducerLoading,
  theme: reducerTheme,
  auth: reducerAuth,
  locale: reducerLocale,
  notifications: reducerNotifications,
  users: reducerUsers,
  modals: reducerModals,
}

export default combineReducers(reducers)
