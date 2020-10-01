/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import propTypes from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { getIsLoggedInStatus } from '../../state/selectors'
import { logout } from '../../state/pieces/auth'
import { RoutePaths } from '../../constants/routePaths'

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedInStatus(state),
})

const mapDispatchToProps = {
  onLogout: logout,
}

function enhancer(ComposedComponent) {
  class WrapperMainContainer extends Component {
    static propTypes = {
      intl: propTypes.object.isRequired,
      history: propTypes.object.isRequired,
      onLogout: propTypes.func.isRequired,
    }

    onProfile = () => this.props.history.push(RoutePaths.PROFILE)

    onSettings = () => this.props.history.push(RoutePaths.SETTINGS)

    render() {
      return (
        <ComposedComponent
          {...this.props}
          onLogout={this.props.onLogout}
          onProfile={this.onProfile}
          onSettings={this.onSettings}
        />
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(injectIntl(hoistStatics(WrapperMainContainer, ComposedComponent)))
}

export default enhancer
