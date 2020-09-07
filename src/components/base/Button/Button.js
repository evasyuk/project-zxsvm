import React from 'react'
import { withTheme } from 'styled-components'
import { ButtonWrapper } from './styles';

const Button = ({ title, ...props }) => (
    <ButtonWrapper {...props}>{title}</ButtonWrapper>
)

export default withTheme(Button)
