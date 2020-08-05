import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { createGlobalStyle } from "styled-components";

import {
    IntlProvider,
    ThemeProvider,
    NotificationProvider,
    LoadingOverlay,
    Notification,
} from "./components"

import { Router } from "./routes"

import { App } from "./containers"

import { store } from './state'

const target = document.querySelector("#app")
const GlobalStyles = createGlobalStyle`
  #root{height: 100vh}
`

render(
    <Provider store={store}>
       <ThemeProvider>
         <IntlProvider>
            <>
                <GlobalStyles />
                <Router>
                    <NotificationProvider maxSnack={3}>
                        <>
                            <App />
                            <Notification />
                            <LoadingOverlay />
                        </>
                    </NotificationProvider>
                </Router>
            </>
            </IntlProvider>
        </ThemeProvider>
    </Provider>,
    target,
)
