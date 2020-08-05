import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { MainContainer, LoginPage, RestorePasswordPage } from '../../'
import { Splash, ProtectedRoute } from '../../../components'

export const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/login" component={LoginPage} />
        <Route path="/restore" component={RestorePasswordPage} />
        <ProtectedRoute path="/" component={MainContainer} />
    </Switch>
)
