import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../dependent'

const LinkButtonWrapper = styled.button`
  color: ${({ secondary, disabled, theme }) =>
    secondary || disabled ? theme.colors.gray300 : theme.colors.main};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 0;
  display: inline-flex;
  align-items: center;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`

const LinkButton = ({ title, iconName, ...props }) => (
  <LinkButtonWrapper {...props}>
    <Icon name={iconName} color="currentColor" width={14} height={11} />
    {title}
  </LinkButtonWrapper>
)

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  iconName: PropTypes.string,
}

LinkButton.defaultProps = {
  disabled: false,
  type: 'button',
  iconName: '',
}

export default LinkButton
