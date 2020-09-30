import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { createGlobalStyle } from 'styled-components'

import { IntlProvider, ThemeProvider, SnackbarProvider } from './components'

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

render(
  <Provider store={store}>
    <ThemeProvider>
      <IntlProvider>
        <SnackbarProvider>
          <>
            <GlobalStyles />
            <Router>
              <>
                <LoadingOverlay />
                <ModalFactory />
                <App />
              </>
            </Router>
          </>
        </SnackbarProvider>
      </IntlProvider>
    </ThemeProvider>
  </Provider>,
  target,
)
