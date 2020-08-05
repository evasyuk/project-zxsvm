/* eslint-disable no-underscore-dangle */
/* global __DEV__ */
import { applyMiddleware, createStore, compose } from 'redux'
import middlewares from './middleware'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// import { isDEV } from '../helpers/isDev'

require('./enableDebug.web')

const enhancers = [applyMiddleware(...middlewares)]

console.log('?', window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

const composeEnhancers = composeWithDevTools
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers)

export const store = createStore(reducer, {}, enhancer)

export default { store, history }
