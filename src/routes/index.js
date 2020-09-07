import { ROUTES } from '../constants/routes'

import {
  SettingsPage,
  ProfilePage,
  LoginPage,
  PrivacyContainer,
  RestorePasswordPage,
  MainContainer,
  LandingPage,
} from '../containers'

const routes = [
  {
    id: 2,
    path: ROUTES.SETTINGS,
    exact: true,
    component: SettingsPage,
  },
  {
    id: 3,
    path: ROUTES.PROFILE,
    exact: true,
    component: ProfilePage,
  },
  {
    id: 3,
    path: ROUTES.LOGIN,
    exact: true,
    component: LoginPage,
  },
  {
    id: 4,
    path: ROUTES.PRIVACY,
    exact: true,
    component: PrivacyContainer,
  },
  {
    id: 5,
    path: ROUTES.RESTORE,
    exact: true,
    component: RestorePasswordPage,
  },
  {
    id: 6,
    path: ROUTES.LANDING,
    exact: true,
    component: LandingPage,
  },
  {
    id: 7,
    path: ROUTES.HOME,
    exact: true,
    component: MainContainer,
  },
]

export { BrowserRouter as Router } from 'react-router-dom'

export default routes
