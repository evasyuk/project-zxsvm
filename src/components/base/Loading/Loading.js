import React from 'react'
import { bool, string } from 'prop-types'

import { Spinner, LoadingWrapper } from './styles'

const Loading = ({ isVisible, selector }) =>
  isVisible ? (
    <LoadingWrapper>
      <Spinner data-selector={selector} />
    </LoadingWrapper>
  ) : null

Loading.propTypes = {
  isVisible: bool.isRequired,
  selector: string,
}

Loading.defaultProps = {
  selector: null,
}

export default Loading
