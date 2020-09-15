import React from 'react'
import styled from 'styled-components'

import { Icon } from '../../dependent'

const HeaderContainer = styled.div`
  width: 100vw;
  height: 56px;

  display: flex;
  align-items: center;

  padding-left: 10px;
  padding-right: 10px;

  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
`

const MenuButtonWrapper = styled.div`
  width: 24px;
  height: 24px;

  padding: 1px

  display: inline;
  justify-content: center;
`

const Header = () => (
  <HeaderContainer>
    <MenuButtonWrapper>
      <Icon name="hamburger" color="#606060" size={33} />
    </MenuButtonWrapper>
  </HeaderContainer>
)

Header.displayName = 'Header'

export default Header
