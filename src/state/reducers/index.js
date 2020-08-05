import { combineReducers } from 'redux'

import { reducer_loading } from '../pieces/loading'
import { reducer_auth } from '../pieces/auth'
import { reducer_theme } from '../pieces/theme'
import { reducer_locale } from '../pieces/locale'


const reducers = {
  loading: reducer_loading,
  theme: reducer_theme,
  auth: reducer_auth,
  locale: reducer_locale,
}

export default combineReducers(reducers)
