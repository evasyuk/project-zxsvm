import React from 'react'
import { string } from 'prop-types'
import { withTheme } from 'styled-components'
import { Icon } from '../../'

import { TitleWrapLink, TitleWrap, TitleIconWrap, TitleInner } from './styles'

const getWrapper = (path) => path ? TitleWrapLink : TitleWrap

const Title = ({ title, path }) => {
    const Component = getWrapper(path)
    return (
        <Component to={path} withback={path}>
            {path && (
                <TitleIconWrap>
                    <Icon name="Arrow" />
                </TitleIconWrap>
            )}
            <TitleInner>{title}</TitleInner>
        </Component>
    )
}

Title.propTypes = {
  title: string.isRequired,
  path: string,
}

export default withTheme(Title)