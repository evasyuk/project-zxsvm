import styled from 'styled-components'

export const WidthContainer = styled.div`
  width: 100%;
  height: 54px;

  display: flex;
  justify-content: space-between;
`

export const ItemStyles = styled.div`
  width: 20px;
  height: 20px
  
  ${({ chosenOption }) => (chosenOption ? '' : 'text-decoration: underline;')}
  ${({ chosenOption }) => (chosenOption ? '' : 'cursor: pointer;')}
  
  color: ${({ theme, chosenOption }) =>
    chosenOption ? theme.colors.gray500 : theme.colors.gray300};
  font-weight: ${({ theme, chosenOption }) =>
    chosenOption ? theme.fontWeights.bolder : theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.sm};
  cursor: pointer;
`
