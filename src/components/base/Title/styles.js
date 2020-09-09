import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TitleWrapLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray500};
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  cursor: ${({ withback }) => (withback ? 'pointer' : 'default')};
  pointer-events: ${({ withback }) => (withback ? 'auto' : 'none')};
  text-decoration: none;
`

export const TitleWrap = styled.div`
  color: ${({ theme }) => theme.colors.gray500};
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  cursor: ${({ withback }) => (withback ? 'pointer' : 'default')};
  pointer-events: ${({ withback }) => (withback ? 'auto' : 'none')};
  text-decoration: none;
`

export const TitleIconWrap = styled.div`
  width: 6px;
  height: 10px;
  margin-right: 5px;
  display: flex;
`

export const TitleInner = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`
