import React, { Component } from 'react'
import propTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import { Title, Text, Button } from '../../components'

import { LoginForm } from '../../components/forms'
import { MarginTopWrapper, ModalWindow } from '../../components/styles'

import { createSignUpModal } from '../../components/modals'

import {
  LeftSideWrapper,
  RightSideWrapper,
  RideSideContainer,
  Wrapper,
} from './styles'

class Login extends Component {
  onLogin = () => {
    console.log('onLogin pressed')
  }

  renderFull = () => (
    <ModalWindow>
      <LeftSideWrapper>
        <MarginTopWrapper>
          <Title title="Login" />
          <MarginTopWrapper>
            <LoginForm intl={this.props.intl} onLogin={this.onLogin} />
          </MarginTopWrapper>
        </MarginTopWrapper>
      </LeftSideWrapper>
      <RightSideWrapper>
        <RideSideContainer>
          <Title title="New member?" />
          <MarginTopWrapper>
            <Text>Fill up personal info</Text>
            <Text>and start your journey!</Text>
          </MarginTopWrapper>
          <MarginTopWrapper>
            <Button title="Sign Up" onClick={createSignUpModal()} />
          </MarginTopWrapper>
        </RideSideContainer>
      </RightSideWrapper>
    </ModalWindow>
  )

  render() {
    return <Wrapper>{this.renderFull()}</Wrapper>
  }
}

Login.propTypes = {
  intl: propTypes.object.isRequired,
}

export default injectIntl(Login)
