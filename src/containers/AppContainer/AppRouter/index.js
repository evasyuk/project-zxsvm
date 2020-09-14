import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  MainContainer,
  LoginPage,
  RestorePasswordPage,
  SignUpPage,
  DataProtectionPage,
} from '../..'
import { Splash, ProtectedRoute } from '../../../components/controlled'

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route path="/login" component={LoginPage} />
    <Route path="/sign_up" component={SignUpPage} />
    <Route path="/data_protection" component={DataProtectionPage} />
    <Route path="/restore" component={RestorePasswordPage} />
    <ProtectedRoute path="/home" component={MainContainer} />
  </Switch>
)

export default AppRouter
