import React from 'react'
import { withTheme } from 'styled-components'
import propTypes from 'prop-types'

import { ButtonWrapper } from './styles'

const Button = ({ title, ...props }) => (
  <ButtonWrapper {...props}>{title}</ButtonWrapper>
)

Button.propTypes = {
  title: propTypes.string.isRequired,
}

export default withTheme(Button)
