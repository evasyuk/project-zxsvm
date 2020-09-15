import React, { Component } from 'react'
import styled from 'styled-components'

import { Header2 } from '../../components'

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100wv;
  height: 100%;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`

class Main extends Component {
  render() {
    return (
      <TopContainer>
        <Header2
          onProfile={() => console.log('onProfile')}
          onLogout={() => console.log('onLogout')}
        />
        <MainContainer>Main</MainContainer>
      </TopContainer>
    )
  }
}

export default Main
