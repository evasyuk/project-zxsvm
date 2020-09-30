import React, { Component } from 'react'
import { func } from 'prop-types'

import { Header2 } from '../../components'

import { TopContainer, MainContainer } from './styles'

class Main extends Component {
  render() {
    const { onLogout } = this.props

    return (
      <TopContainer>
        <Header2
          onProfile={() => console.log('onProfile')}
          onLogout={onLogout}
        />
        <MainContainer>Main</MainContainer>
      </TopContainer>
    )
  }
}

Main.propTypes = {
  onLogout: func.isRequired,
}

export default Main
