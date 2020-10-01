/* eslint-disable */
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

function enhancer(ComposedComponent, redirectToHome = false) {
  class AuthEnhancer extends Component {
    static propTypes = {
      history: propTypes.object.isRequired,
      isLoggedIn: propTypes.bool.isRequired,
    }

    // TODO: first implementation failed
    render() {
      // if (redirectToHome && this.props.isLoggedIn) {
      //   // login and auth screen
      //   return <Redirect to={RoutePaths.HOME} />
      // }
      //
      // if (!redirectToHome && !this.props.isLoggedIn) {
      //   // main screen
      //   return <Redirect to={RoutePaths.LOGIN} />
      // }

      return <ComposedComponent {...this.props} />
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(hoistStatics(AuthEnhancer, ComposedComponent)))
}

export default enhancer
