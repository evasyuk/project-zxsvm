/* eslint-disable react/static-property-placement */
import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { bool, object } from 'prop-types'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { RoutePaths } from '../../../constants/routePaths'
import { getIsLoggedInStatus } from '../../../state/pieces/auth/selectorAuth'

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedInStatus(state),
})

const mapDispatchToProps = null

function enhancer(ComposedComponent) {
  const HeaderLandingWrapper = (props) => {
    const goToSignUp = () => props.history.push(RoutePaths.SIGN_UP)

    const goToLogin = () => props.history.push(RoutePaths.LOGIN)

    const goToApp = () => props.history.push(RoutePaths.PROFILE)

    return (
      <ComposedComponent
        {...props}
        goToSignUp={goToSignUp}
        goToLogin={goToLogin}
        goToApp={goToApp}
      />
    )
  }

  HeaderLandingWrapper.propTypes = {
    intl: object.isRequired,
    history: object.isRequired,
    isLoggedIn: bool.isRequired,
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    withRouter(
      injectIntl(hoistStatics(HeaderLandingWrapper, ComposedComponent)),
    ),
  )
}

export default enhancer
