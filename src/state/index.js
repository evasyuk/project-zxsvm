/* eslint-disable no-underscore-dangle */
/* global __DEV__ */
import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer, createMigrate } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import middleware from './middleware'
import reducer from './reducers'
import migrations from './migrations'
require('./enableDebug.web')

const enhancers = [applyMiddleware(...middleware)]

const DEBUG_MIGRATIONS = false
/* eslint-disable no-undef */

// todo: move to shared
const isDEV = () => {
    try {
        return __DEV__
    } catch (e) {
        return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    }
}

const composeEnhancers =
    (isDEV() &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers)

const persistConfig = {
    key: 'root',
    version: 1,
    timeout: null, // TODO: https://github.com/rt2zz/redux-persist/issues/717
    migrate: createMigrate(migrations, { debug: DEBUG_MIGRATIONS }),
    storage,
    blacklist: null,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, {}, enhancer)
export const persistor = persistStore(store)

export default { persistor, store, history }
