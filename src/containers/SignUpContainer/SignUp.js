import React, { Component } from 'react'
import propTypes from 'prop-types'

import { Title, Text, LinkButton } from '../../components'

import { SignUpForm } from '../../components/forms'

import {
  MobileMainContent,
  MobileMainSection,
  MobileNoContent,
  MobileTopWrapper,
  MobileWindow,
  ScreenWrapper,
} from '../../components/styles'

const haveAccountBlock = (intl, onLogin) => (
  <MobileTopWrapper>
    <Text>
      {intl.formatMessage({
        id: 'SIGN_UP.ALREADY_REGISTERED',
      })}
    </Text>
    <LinkButton
      onClick={onLogin}
      title={intl.formatMessage({
        id: 'SIGN_UP.BACK_TO_LOGIN',
      })}
    />
  </MobileTopWrapper>
)

class SignUp extends Component {
  renderFull = ({ intl, mIntl, onLogin, onDataProtection, onSignUp }) => (
    <MobileWindow>
      <MobileNoContent />

      <MobileMainContent>
        <MobileMainSection>
          <MobileTopWrapper>
            <MobileTopWrapper>
              <Title title={mIntl('TITLE')} />
              <MobileTopWrapper>
                <SignUpForm
                  intl={intl}
                  onSignUp={onSignUp}
                  onClose={onLogin}
                  onDataProtection={onDataProtection}
                />
              </MobileTopWrapper>
            </MobileTopWrapper>

            {haveAccountBlock(intl, onLogin)}
          </MobileTopWrapper>
        </MobileMainSection>
      </MobileMainContent>

      <MobileNoContent />
    </MobileWindow>
  )

  render() {
    const { intl, mIntl, onLogin, onDataProtection, onSignUp } = this.props

    return (
      <ScreenWrapper>
        {this.renderFull({ intl, mIntl, onLogin, onDataProtection, onSignUp })}
      </ScreenWrapper>
    )
  }
}

SignUp.propTypes = {
  intl: propTypes.object.isRequired,
  mIntl: propTypes.func.isRequired,
  onLogin: propTypes.func.isRequired,
  onDataProtection: propTypes.func.isRequired,
  onSignUp: propTypes.func.isRequired,
}

export default SignUp
