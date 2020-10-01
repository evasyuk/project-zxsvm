/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import propTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { RoutePaths } from '../../constants/routePaths'
import { register } from '../../state/pieces/auth'
import { getFullURL } from '../../helpers/getFullURL'

const mapStateToProps = () => null

const mapDispatchToProps = {
  register,
}

function enhancer(ComposedComponent) {
  class WrapperLoginContainer extends Component {
    static propTypes = {
      intl: propTypes.object.isRequired,
      location: propTypes.object.isRequired,
      history: propTypes.object.isRequired,
      register: propTypes.func.isRequired,
    }

    onLogin = () => this.props.history.push(RoutePaths.LOGIN)

    onDataProtection = () => {
      window.open(getFullURL(RoutePaths.PRIVACY))
    }

    onSignUp = (data) => {
      this.props.register({
        name: data.sign_up_name,
        email: data.sign_up_email,
        phone: data.sign_up_phone,
        password: data.sign_up_password,
      })
    }

    mIntl = (element, group = 'SIGN_UP') =>
      this.props.intl.formatMessage({
        id: `${group}.${element}`,
      })

    render() {
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
