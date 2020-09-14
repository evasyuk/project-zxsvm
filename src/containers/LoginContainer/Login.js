import React, { Component } from 'react'
import propTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { login } from '../../state/actions'
import { getIsLoggedInStatus } from '../../state/selectors'

import { ROUTES } from '../../constants/routes'

import { Title, Text, Button } from '../../components'

import { LoginForm } from '../../components/forms'
import { MarginTopWrapper, ModalWindow } from '../../components/styles'

import {
  LeftSideWrapper,
  RightSideWrapper,
  RideSideContainer,
  Wrapper,
} from './styles'

class SignUp extends Component {
  onLogin = () => {
    this.props.login()
    this.props.history.replace(ROUTES.HOME)
  }

  onSignUp = () => this.props.history.replace(ROUTES.SIGN_UP)

  renderFull = () => (
    <ModalWindow>
      <LeftSideWrapper>
        <MarginTopWrapper>
          <Title title="Log in" />
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
            <Button title="Sign Up" onClick={this.onSignUp} />
          </MarginTopWrapper>
        </RideSideContainer>
      </RightSideWrapper>
    </ModalWindow>
  )

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to={ROUTES.HOME} />
    }

    return <Wrapper>{this.renderFull()}</Wrapper>
  }
}

SignUp.propTypes = {
  intl: propTypes.object.isRequired,
  history: propTypes.object.isRequired,
  login: propTypes.func.isRequired,
  isLoggedIn: propTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedInStatus(state),
})

const mapDispatchToProps = {
  login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(injectIntl(SignUp)))
