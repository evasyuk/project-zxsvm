import { combineReducers } from 'redux'

import { reducerLoading } from '../pieces/loading'
import { reducerAuth } from '../pieces/auth'
import { reducerTheme } from '../pieces/theme'
import { reducerLocale } from '../pieces/locale'
import { reducerNotifications } from '../pieces/notification'

const reducers = {
  loading: reducerLoading,
  theme: reducerTheme,
  auth: reducerAuth,
  locale: reducerLocale,
  notifications: reducerNotifications,
}

export default combineReducers(reducers)
