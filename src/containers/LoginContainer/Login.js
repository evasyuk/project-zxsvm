import React, { Component } from 'react'
import propTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import { Title, Text, Button } from '../../components'

import { LoginForm } from './components'

import {
  WrapperFull,
  LeftSideWrapper,
  ButtonWrapper,
  RightSideWrapper,
  RideSideContainer,
  Wrapper,
} from './styles'

class Login extends Component {
  onLogin = () => {
    console.log('onLogin pressed')
  }

  renderFull = () => (
    <WrapperFull>
      <LeftSideWrapper>
        <ButtonWrapper>
          <LoginForm intl={this.props.intl} onLogin={this.onLogin} />
        </ButtonWrapper>
      </LeftSideWrapper>
      <RightSideWrapper>
        <RideSideContainer>
          <Title title="Hello, friend!" />
          <ButtonWrapper>
            <Text>Fill up personal info</Text>
            <Text>and start your journey!</Text>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button title="Sign Up" />
          </ButtonWrapper>
        </RideSideContainer>
      </RightSideWrapper>
    </WrapperFull>
  )

  render() {
    return <Wrapper>{this.renderFull()}</Wrapper>
  }
}

Login.propTypes = {
  intl: propTypes.object.isRequired,
}

export default injectIntl(Login)
