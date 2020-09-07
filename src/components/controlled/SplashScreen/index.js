import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getIsLoggedInStatus } from '../../../state/selectors'
import { ROUTES } from '../../../constants/routes'

const Splash = ({ isLoggedIn }) => isLoggedIn ? <Redirect to={ROUTES.HOME} /> : <Redirect to={ROUTES.LOGIN} />

Splash.propTypes = {
    isLoggedIn: propTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedInStatus(state),
})

export default connect(
    mapStateToProps,
    null
)(Splash)
