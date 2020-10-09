import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${(props) => (props.height ? `height: ${props.height}px;` : '')};
  min-width: 100px;
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
  padding: 7px 30px;
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSizes.sm};
  box-shadow: 2px 5px 10px -6px ${(props) => (props.secondary ? props.theme.colors.main : props.theme.colors.secondary)};
`
