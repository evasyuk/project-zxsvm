import { ROUTES } from '../constants/routes'

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
    path: ROUTES.LOGIN,
    exact: true,
    component: LoginPage,
  },
  {
    path: ROUTES.SIGN_UP,
    exact: true,
    component: SignUpPage,
  },
  {
    path: ROUTES.PRIVACY,
    exact: true,
    component: PrivacyContainer,
  },
  {
    path: ROUTES.DATA_PROTECTION,
    exact: true,
    component: DataProtectionPage,
  },
  {
    path: ROUTES.SETTINGS,
    exact: true,
    component: SettingsPage,
  },
  {
    path: ROUTES.PROFILE,
    exact: true,
    component: ProfilePage,
  },
  {
    path: ROUTES.RESTORE,
    exact: true,
    component: RestorePasswordPage,
  },
  {
    path: ROUTES.LANDING,
    exact: true,
    component: LandingPage,
  },
  {
    path: ROUTES.HOME,
    exact: true,
    component: MainContainer,
  },
].map((item, id) => ({ ...item, id }))

export { BrowserRouter as Router } from 'react-router-dom'

export default routes
