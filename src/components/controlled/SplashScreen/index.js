import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getIsLoggedInStatus } from '../../../state/selectors'
import { RoutePaths } from '../../../constants/routePaths'

const Splash = ({ isLoggedIn }) =>
  isLoggedIn ? (
    <Redirect to={RoutePaths.HOME} />
  ) : (
    <Redirect to={RoutePaths.LOGIN} />
  )

Splash.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedInStatus(state),
})

export default connect(mapStateToProps, null)(Splash)
