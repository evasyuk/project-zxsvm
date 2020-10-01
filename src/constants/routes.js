import { Route } from 'react-router-dom'
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
import { ProtectedRoute } from '../components/controlled'

const routes = [
  {
    path: RoutePaths.LOGIN,
    exact: true,
    component: LoginPage,
  },
  {
    path: RoutePaths.SIGN_UP,
    exact: true,
    component: SignUpPage,
  },
  {
    path: RoutePaths.PRIVACY,
    exact: true,
    component: PrivacyContainer,
  },
  {
    path: RoutePaths.DATA_PROTECTION,
    exact: true,
    component: DataProtectionPage,
  },
  {
    path: RoutePaths.SETTINGS,
    exact: true,
    component: SettingsPage,
  },
  {
    path: RoutePaths.PROFILE,
    exact: true,
    component: ProfilePage,
  },
  {
    path: RoutePaths.RESTORE,
    exact: true,
    component: RestorePasswordPage,
  },
  {
    path: RoutePaths.LANDING,
    exact: true,
    component: LandingPage,
  },
  {
    path: RoutePaths.HOME,
    exact: true,
    component: MainContainer,
    protected: true,
  },
].map((item, id) => ({ ...item, id }))

const SWITCH_ROUTES = routes.map((item) => {
  const COMPONENT = item.protected ? ProtectedRoute : Route
  return (
    <COMPONENT
      key={item.path}
      path={item.path}
      component={item.component}
      exact={item.exact}
    />
  )
})

export { SWITCH_ROUTES }

export { BrowserRouter as Router } from 'react-router-dom'

// export default routes
