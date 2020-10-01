import { Redirect, Route } from 'react-router-dom'
import React from 'react'
import { RoutePaths } from './routePaths'

import {
  SettingsPage,
  ProfilePage,
  LoginPage,
  PrivacyContainer,
  RestorePasswordPage,
  MainContainer,
  LandingPage,
  SignUpPage,
  DataProtectionPage,
} from '../containers'

const routes = [
  {
    title: RoutePaths.LANDING,
    path: RoutePaths.LANDING,
    exact: true,
    component: LandingPage,

    topLevel: true,
  },
  {
    title: RoutePaths.LOGIN,
    path: RoutePaths.LOGIN,
    exact: true,
    component: LoginPage,

    topLevel: true,
  },
  {
    title: RoutePaths.SIGN_UP,
    path: RoutePaths.SIGN_UP,
    exact: true,
    component: SignUpPage,

    topLevel: true,
  },
  {
    title: RoutePaths.RESTORE,
    path: RoutePaths.RESTORE,
    exact: true,
    component: RestorePasswordPage,

    topLevel: true,
  },
  {
    title: RoutePaths.PRIVACY,
    path: RoutePaths.PRIVACY,
    exact: true,
    component: PrivacyContainer,

    topLevel: true,
  },
  {
    title: RoutePaths.DATA_PROTECTION,
    path: RoutePaths.DATA_PROTECTION,
    exact: true,
    component: DataProtectionPage,

    topLevel: true,
  },
  {
    title: RoutePaths.MAIN,
    path: RoutePaths.LANDING,
    component: MainContainer,

    protected: true,
    topLevel: true,
  },

  {
    title: RoutePaths.SETTINGS,
    path: RoutePaths.SETTINGS,
    exact: true,
    component: SettingsPage,
  },
  {
    title: RoutePaths.PROFILE,
    path: RoutePaths.PROFILE,
    exact: true,
    component: ProfilePage,
  },
].map((item, id) => ({ ...item, id }))

const TOP_LEVEL_ROUTES = routes
  .filter((item) => item.topLevel)
  .map((item) => (
    <Route
      key={item.path}
      path={item.path}
      component={item.component}
      exact={item.exact}
    />
  ))

const MAIN_LEVEL_ROUTES = routes
  .filter((item) => !item.topLevel)
  .map((item) => (
    <Route
      key={item.path}
      path={item.path}
      component={item.component}
      exact={item.exact}
    />
  ))

// TOP_LEVEL_ROUTES.push(<Route key="splash" component={Splash} />)
// MAIN_LEVEL_ROUTES.push(<Route key="notfound" component={PageNotFound} />)
MAIN_LEVEL_ROUTES.push(<Redirect key="notfound" to={RoutePaths.PROFILE} />)

export { TOP_LEVEL_ROUTES, MAIN_LEVEL_ROUTES }

export { BrowserRouter as Router } from 'react-router-dom'
