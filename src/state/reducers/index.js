import { combineReducers } from 'redux'

import { reducerLoading } from '../pieces/loading'
import { reducerAuth } from '../pieces/auth'
import { reducerTheme } from '../pieces/theme'
import { reducerLocale } from '../pieces/locale'

const reducers = {
  loading: reducerLoading,
  theme: reducerTheme,
  auth: reducerAuth,
  locale: reducerLocale,
}

export default combineReducers(reducers)
