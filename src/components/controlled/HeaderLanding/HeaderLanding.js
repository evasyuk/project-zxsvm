import React from 'react'
import { withTheme } from 'styled-components'
import { func, object, bool } from 'prop-types'

import {
  HeaderLandingWrapper,
  CenterPart,
  LeftPart,
  RightPart,
  CenterContentWrapper,
  RightContentWrapper,
} from './styles'

import { Logo, Title, Button } from '../..'

const renderLeft = ({ isLoggedIn, goToApp, goToLogin, goToSignUp }) => (
  <RightContentWrapper>
    {isLoggedIn ? (
      <Button title="Open app" onClick={goToApp} id="open-app-btn" />
    ) : (
      <>
        <Button title="Sign Up" onClick={goToSignUp} id="sign-up-btn" />
        <div style={{ width: '10px' }} />
        <Button title="Login" onClick={goToLogin} id="login-btn" />
      </>
    )}
  </RightContentWrapper>
)

const HeaderLanding = ({ ...props }) => (
  <HeaderLandingWrapper {...props}>
    <LeftPart />
    <CenterPart>
      <CenterContentWrapper>
        <Logo height="64px" width="64px" />
        <Title title="Welcome to ZXSVM!" />
      </CenterContentWrapper>
    </CenterPart>
    <RightPart>{renderLeft(props)}</RightPart>
  </HeaderLandingWrapper>
)

HeaderLanding.propTypes = {
  isLoggedIn: bool.isRequired,
  goToSignUp: func.isRequired,
  goToLogin: func.isRequired,
  goToApp: func.isRequired,
  intl: object.isRequired,
}

export default withTheme(HeaderLanding)
