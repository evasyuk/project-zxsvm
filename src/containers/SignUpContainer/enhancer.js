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
      isLoggedIn: propTypes.bool.isRequired,
    }

    onLogin = () => this.props.history.push(ROUTES.LOGIN)

    onDataProtection = () => this.props.history.replace(ROUTES.DATA_PROTECTION)

    onSignUp = () => {
      console.log('onSignUp pressed')
    }

    mIntl = (element, group = 'SIGN_UP') =>
      this.props.intl.formatMessage({
        id: `${group}.${element}`,
      })

    render() {
      if (this.props.isLoggedIn) {
        return <Redirect to={ROUTES.HOME} />
      }

      return (
        <ComposedComponent
          {...this.props}
          onLogin={this.onLogin}
          onDataProtection={this.onDataProtection}
          onSignUp={this.onSignUp}
          mIntl={this.mIntl}
        />
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    injectIntl(
      withRouter(hoistStatics(WrapperLoginContainer, ComposedComponent)),
    ),
  )
}

export default enhancer
