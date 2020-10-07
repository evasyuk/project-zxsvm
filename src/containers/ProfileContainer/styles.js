import styled from 'styled-components'
import { MobileTopWrapper } from '../../components/styles'

export const ContactBlockWrapper = styled(MobileTopWrapper)`
  display: flex;
  flex: 1;
  flex-direction: column;

  align-items: center;
`

export const ActionsBlockWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;
`

export const ActionWrapper = styled.div`
  margin: 5px;
`

export const ModalWrapper = styled.div`
  position: absolute;
`
