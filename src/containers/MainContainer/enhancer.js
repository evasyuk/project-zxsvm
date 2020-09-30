/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import propTypes from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { getIsLoggedInStatus } from '../../state/selectors'
import { logout } from '../../state/pieces/auth'

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

    render() {
      return (
        <ComposedComponent {...this.props} onLogout={this.props.onLogout} />
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(injectIntl(hoistStatics(WrapperMainContainer, ComposedComponent)))
}

export default enhancer
