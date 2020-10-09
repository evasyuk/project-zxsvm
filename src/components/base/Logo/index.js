import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const logo = require('../../../assets/gennyware_logo_200.png')

const LogoWrap = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height}};
  object-fit: contain;
  img {
    width: 100%;
    height: 100%;
  }
  margin-right: 24px;
`

const Logo = ({ width = '150px', height = '150px' }) => (
  <LogoWrap width={width} height={height}>
    <img src={logo} alt="logo" />
  </LogoWrap>
)

Logo.propTypes = {
  width: string,
  height: string,
}

export default Logo
