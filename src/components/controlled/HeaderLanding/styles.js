import styled from 'styled-components'

export const HeaderLandingWrapper = styled.div`
  position: fixed;

  width: 100%;
  height: 64px;

  display: flex;
  align-items: flex-start;

  justify-content: space-between;

  background-color: white;

  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
`

export const LeftPart = styled.div`
  width: 24px;
  height: 100%;

  display: block;
`

export const RightPart = styled.div`
  height: 100%;

  display: flex;
`

export const CenterPart = styled.div`
  display: flex;
  flex-grow: 1;

  justify-content: flex-start;

  height: 100%;
`

export const CenterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 200px;
  height: 100%;
`
