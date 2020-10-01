import React from 'react'

import { Switch } from 'react-router-dom'
import { TOP_LEVEL_ROUTES } from '../../../constants/routes'

const AppRouter = () => <Switch>{TOP_LEVEL_ROUTES}</Switch>

export default AppRouter
