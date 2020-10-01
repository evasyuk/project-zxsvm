import React, { Component } from 'react'
import { func } from 'prop-types'
import { Switch } from 'react-router-dom'

import { TopContainer } from './styles'
import { Header2 } from '../../components'

import { MAIN_LEVEL_ROUTES } from '../../constants/routes'

class Main extends Component {
  render() {
    const { onLogout, onProfile, onSettings } = this.props

    return (
      <TopContainer>
        <Header2
          onProfile={onProfile}
          onLogout={onLogout}
          onSettings={onSettings}
        />
        <Switch>{MAIN_LEVEL_ROUTES}</Switch>
      </TopContainer>
    )
  }
}

Main.propTypes = {
  onLogout: func.isRequired,
  onProfile: func.isRequired,
  onSettings: func.isRequired,
}

export default Main
