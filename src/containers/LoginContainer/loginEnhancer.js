/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import propTypes from 'prop-types'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { ROUTES } from '../../constants/routes'
import { getIsLoggedInStatus } from '../../state/selectors'
import { login } from '../../state/pieces/auth'

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedInStatus(state),
})

const mapDispatchToProps = {
  login,
}

function enhancer(ComposedComponent) {
  class WrapperLoginContainer extends Component {
    static propTypes = {
      intl: propTypes.object.isRequired,
      history: propTypes.object.isRequired,
      login: propTypes.func.isRequired,
      isLoggedIn: propTypes.bool.isRequired,
    }

    onLogin = () => {
      this.props.login()
      this.props.history.replace(ROUTES.HOME)
    }

    onSignUp = () => this.props.history.replace(ROUTES.SIGN_UP)

    render() {
      if (this.props.isLoggedIn) {
        return <Redirect to={ROUTES.HOME} />
      }

      return (
        <ComposedComponent
          {...this.props}
          onLogin={this.onLogin}
          onSignUp={this.onSignUp}
        />
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    withRouter(
      injectIntl(hoistStatics(WrapperLoginContainer, ComposedComponent)),
    ),
  )
}

export default enhancer
