import React from 'react'
import { bool, string } from 'prop-types'
import { connect } from 'react-redux'

import { getLoadingStatus } from '../../../state/selectors'

import Loading from '../../base/Loading'

const LoadingOverlay = props => <Loading {...props} />

LoadingOverlay.propTypes = {
  isVisible: bool.isRequired,
  selector: string,
}

LoadingOverlay.defaultProps = {
  selector: null,
}

const mapStateToProps = state => ({
  isVisible: getLoadingStatus(state) || false,
})

export default connect(mapStateToProps)(LoadingOverlay)
