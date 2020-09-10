import React from 'react'
import { bool, string } from 'prop-types'

import { Spinner } from './styles'

const Loading = ({ isVisible, selector }) =>
  isVisible ? <Spinner data-selector={selector} /> : null

Loading.propTypes = {
  isVisible: bool.isRequired,
  selector: string,
}

Loading.defaultProps = {
  selector: null,
}

export default Loading
