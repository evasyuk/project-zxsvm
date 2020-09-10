import styled from 'styled-components'

export const Wrapper = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
`

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(9, 9, 9, 0.6);
  animation: backdropAnimationFrames linear 0.2s;
  transition: opacity 1s linear 0.2s;
  z-index: 10;
  @keyframes backdropAnimationFrames {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 90%;
  min-width: 560px;
  max-width: 720px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  animation: containerAnimationFrames linear 0.2s;
  transition: transform 1s linear 0.2s;
  @keyframes containerAnimationFrames {
    0% {
      transform: translate(0, 150%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`

// Not production styles
export const WrapperInner = styled.div`
  display: flex;
`

export const StepsWrapper = styled.div`
  width: 160px;
  padding: 15px 20px 10px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray400};
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 560px;
`
