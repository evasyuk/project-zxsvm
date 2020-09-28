import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { createGlobalStyle } from 'styled-components'

import {
  IntlProvider,
  ThemeProvider,
  // NotificationProvider,
  // Notification,
} from './components'

import { LoadingOverlay } from './components/controlled'
import { ModalFactory } from './components/modals'

import { Router } from './routes'

import { App } from './containers'

import { store } from './state'

const target = document.querySelector('#app')
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    
    & > * {
    margin-right: 15px;
        height: 100vh;
        width: 100vw;
    }
  }
`

console.log('API_URL', process.env.API_URL)

render(
  <Provider store={store}>
    <ThemeProvider>
      <IntlProvider>
        <>
          <GlobalStyles />
          <Router>
            {/* <NotificationProvider maxSnack={3}> */}
            <>
              <ModalFactory />
              <App />
              {/* <Notification /> */}
              <LoadingOverlay />
            </>
            {/* </NotificationProvider> */}
          </Router>
        </>
      </IntlProvider>
    </ThemeProvider>
  </Provider>,
  target,
)
