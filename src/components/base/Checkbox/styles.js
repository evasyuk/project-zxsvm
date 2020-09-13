import styled from 'styled-components'
import { Checkbox } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const CheckboxWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
`

export const CheckboxComponent = styled(Checkbox)`
  border-radius: 4px;
  padding: 0 !important;
  &:hover {
    background-color: transparent !important;
  }
`

export const FormControlLabelWrapper = styled(FormControlLabel)`
  && {
    display: flex;
    align-items: center;
    && {
      margin: 0;
      display: flex;
      align-items: center;
      font-size: ${(props) => props.theme.fontSizes.sm};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      line-height: 1.14;
      color: ${(props) =>
        props.error ? props.theme.colors.red : props.theme.colors.gray500};
      cursor: pointer;
      && {
        & span:last-child {
          font-size: ${(props) => props.theme.fontSizes.sm};
          font-weight: ${(props) => props.theme.fontWeights.bold};
          margin-left: ${(props) => (props.label ? '10px' : 0)};
          line-height: 1;
        }
      }
    }
  }
`
