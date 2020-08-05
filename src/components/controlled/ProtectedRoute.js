import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { ROUTES } from '../../constants/routes'
import { getIsLoggedInStatus } from '../../state/selectors'

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  location,
  ...rest
}) => (
    <Route
        {...rest}
        render={props =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: ROUTES.LOGIN,
                        state: { from: location },
                    }}
                />
            )
        }
    />
)

PrivateRoute.propTypes = {
    component: propTypes.func.isRequired,
    isLoggedIn: propTypes.bool.isRequired,
    location: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedInStatus(state),
})

export default connect(
    mapStateToProps,
    null,
)(PrivateRoute)
