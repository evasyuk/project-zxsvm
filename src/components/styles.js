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

export const MobileTopWrapper = styled.div`
  margin-top: ${(props) =>
    props.times === null ? '0' : `calc(35px * ${props?.times || 1})`};
  text-align: center;
`

export const MobileMainSection = styled.div`
  margin-left: 64px;
  margin-right: 64px;
`

export const MobileWindow = styled.div`
  display: table;
  width: 100%;
  height 100%;
`

export const MobileMainContent = styled.div`
  width: 500px;
  height: 25px;
  display: table-cell;
`

export const MobileNoContent = styled.div`
  width: auto;
  display: table-cell;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const ScreenWrapper = styled.div`
  width: 100%;
  height: 100%;

  min-height: 700px;

  overflow: auto;

  display: flex;
  align-items: center;
  justify-content: center;
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
