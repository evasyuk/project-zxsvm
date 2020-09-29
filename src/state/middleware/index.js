import { createLogger } from 'redux-logger'
import apiMiddleware from './apiMiddleware'
import asyncDispatchMiddleware from './asyncDispatch'
import api from '../../api'

import { isDEV } from '../../helpers/isDev'

const middlewares = [apiMiddleware(api), asyncDispatchMiddleware]
if (isDEV) {
  // global.XMLHttpRequest = global.originalXMLHttpRequest ?
  //   global.originalXMLHttpRequest :
  //   global.XMLHttpRequest
  // global.FormData = global.originalFormData ?
  //   global.originalFormData :
  //   global.FormData
  // // TODO fix logger if needed;
  middlewares.push(createLogger({ collapsed: true }))
}

export default middlewares
