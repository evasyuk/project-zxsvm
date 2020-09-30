import React, { Component } from 'react'
import propTypes from 'prop-types'

import { Text, LinkButton } from '../../components'

import { LoginForm } from '../../components/forms'
import {
  MobileTopWrapper,
  MobileWindow,
  MobileMainContent,
  MobileNoContent,
  MobileMainSection,
  ScreenWrapper,
} from '../../components/styles'

import { LogoWrap, ProjectNameLine } from './styles'

const logo = require('../../assets/gennyware_logo_200.png')

const noAccountBlock = (intl, onSignUp) => (
  <MobileTopWrapper>
    <Text>
      {intl.formatMessage({
        id: 'LOG_IN.NO_ACCOUNT',
      })}
    </Text>
    <LinkButton
      onClick={onSignUp}
      title={intl.formatMessage({
        id: 'LOG_IN.CREATE_NEW_ONE',
      })}
    />
  </MobileTopWrapper>
)

class SignUp extends Component {
  renderMobile = ({ intl, onLogin, onSignUp }) => (
    <MobileWindow>
      <MobileNoContent />

      <MobileMainContent>
        <MobileMainSection>
          <MobileTopWrapper times={3}>
            <ProjectNameLine>
              <LogoWrap>
                <img src={logo} alt="logo" />
              </LogoWrap>
            </ProjectNameLine>

            <MobileTopWrapper>
              <LoginForm intl={intl} onLogin={onLogin} />
            </MobileTopWrapper>

            {noAccountBlock(intl, onSignUp)}
          </MobileTopWrapper>
        </MobileMainSection>
      </MobileMainContent>

      <MobileNoContent />
    </MobileWindow>
  )

  render() {
    const { intl, onLogin, onSignUp } = this.props

    return (
      <ScreenWrapper>
        {this.renderMobile({ intl, onLogin, onSignUp })}
      </ScreenWrapper>
    )
  }
}

SignUp.propTypes = {
  intl: propTypes.object.isRequired,
  onLogin: propTypes.func.isRequired,
  onSignUp: propTypes.func.isRequired,
}

export default SignUp
