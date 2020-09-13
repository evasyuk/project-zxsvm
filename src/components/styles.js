import styled from 'styled-components'

export const TopWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const TopBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 15%;

  position: absolute;
  pointer-events: none;
  z-index: -1;
`

export const MarginTopWrapper = styled.div`
  margin-top: 35px;
  text-align: center;
`

export const ModalWindow = styled.div`
  height: 100vh;
  width: 100vw;

  border-radius: 20px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  background-color: white;
  display: flex;
`
