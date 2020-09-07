import React from 'react'
import { string } from 'prop-types'
import { withTheme } from 'styled-components'
import { Icon } from '../../'

import { TitleWrap, TitleIconWrap, TitleInner } from './styles'

const Title = ({ title, path }) => (
  <TitleWrap to={path} withback={path}>
    {path && (
      <TitleIconWrap>
        <Icon name="Arrow" />
      </TitleIconWrap>
    )}
    <TitleInner>{title}</TitleInner>
  </TitleWrap>
)

Title.propTypes = {
  title: string.isRequired,
  path: string,
}

export default withTheme(Title)