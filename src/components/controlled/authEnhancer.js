/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import propTypes from 'prop-types'

import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { RoutePaths } from '../../constants/routePaths'
import { getIsLoggedInStatus } from '../../state/selectors'

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedInStatus(state),
})

const mapDispatchToProps = null

function enhancer(ComposedComponent, checkAuthAvailable = false) {
  class AuthEnhancer extends Component {
    static propTypes = {
      history: propTypes.object.isRequired,
      location: propTypes.object.isRequired,
      isLoggedIn: propTypes.bool.isRequired,
    }

    render() {
      if (checkAuthAvailable && this.props.isLoggedIn) {
        // from login and signUp screens
        return <Redirect to={RoutePaths.APP} />
      }

      if (!checkAuthAvailable && !this.props.isLoggedIn) {
        // from main screen to login
        return <Redirect to={RoutePaths.LOGIN} />
      }

      return <ComposedComponent {...this.props} />
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(hoistStatics(AuthEnhancer, ComposedComponent)))
}

export default enhancer
