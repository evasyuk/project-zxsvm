import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.fullWidth ? 'width: 100%;' : '')}
  ${(props) => (props.height ? `height: ${props.height}px;` : '')};
  min-width: 80px;
  border-radius: ${(props) => `${props.theme.borderRadius}`};
  cursor: pointer;
  outline: 0;
  border: none;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.66 : 1)};
  background: ${(props) => props.theme.colors.main};
  padding: ${(props) => (props.padding ? props.padding : '7px 0px')};
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSizes.sm};
  box-shadow: 2px 5px 10px -6px ${(props) => (props.secondary ? props.theme.colors.main : props.theme.colors.secondary)};
`
