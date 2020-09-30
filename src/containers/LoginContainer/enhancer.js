/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import propTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { ROUTES } from '../../constants/routes'
import { login } from '../../state/pieces/auth'

const mapStateToProps = null

const mapDispatchToProps = {
  login,
}

function enhancer(ComposedComponent) {
  class WrapperLoginContainer extends Component {
    static propTypes = {
      intl: propTypes.object.isRequired,
      history: propTypes.object.isRequired,
      login: propTypes.func.isRequired,
    }

    onLogin = (email, password) => {
      this.props.login(email, password)
    }

    onSignUp = () => this.props.history.replace(ROUTES.SIGN_UP)

    render() {
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
