import React, { Component } from 'react'
import propTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'

import { ROUTES } from '../../constants/routes'

import { Title, Text, Button } from '../../components'

import { SignUpForm } from '../../components/forms'
import { MarginTopWrapper, ModalWindow } from '../../components/styles'

import {
  LeftSideWrapper,
  RightSideWrapper,
  RideSideContainer,
  Wrapper,
} from './styles'

class SignUp extends Component {
  onLogin = () => this.props.history.push(ROUTES.LOGIN)

  onDataProtection = () => this.props.history.replace(ROUTES.DATA_PROTECTION)

  onSignUp = () => {
    console.log('onLogin pressed')
  }

  renderFull = () => (
    <ModalWindow>
      <LeftSideWrapper>
        <MarginTopWrapper>
          <Title title="Sign up" />
          <MarginTopWrapper>
            <SignUpForm
              intl={this.props.intl}
              onSignUp={this.onSignUp}
              onClose={this.onLogin}
              onDataProtection={this.onDataProtection}
            />
          </MarginTopWrapper>
        </MarginTopWrapper>
      </LeftSideWrapper>
      <RightSideWrapper>
        <RideSideContainer>
          <Title title="Already registered?" />
          <MarginTopWrapper>
            <Text>Try your luck</Text>
            <Text>at login page</Text>
          </MarginTopWrapper>
          <MarginTopWrapper>
            <Button title="Log in" onClick={this.onLogin} />
          </MarginTopWrapper>
        </RideSideContainer>
      </RightSideWrapper>
    </ModalWindow>
  )

  render() {
    return <Wrapper>{this.renderFull()}</Wrapper>
  }
}

SignUp.propTypes = {
  intl: propTypes.object.isRequired,
  history: propTypes.object.isRequired,
}

export default withRouter(injectIntl(SignUp))
