import React, { useRef } from 'react'
import { bool, func, oneOfType, node, object, string } from 'prop-types'

import { Wrapper, Backdrop, Container } from './styles'

const Modal = ({ id, open, children, close }) => {
  const handleClose = () => close(false)

  const mouseDownTarget = useRef()

  const handleMouseDown = (e) => {
    mouseDownTarget.current = e.target
  }

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return
    }

    if (e.target !== mouseDownTarget.current) {
      return
    }

    mouseDownTarget.current = null

    if (handleClose) {
      handleClose(e, 'backdropClick')
    }
  }

  return (
    <Wrapper id={id} open={!!open}>
      <Backdrop onClick={handleBackdropClick} onMouseDown={handleMouseDown}>
        <Container>{children}</Container>
      </Backdrop>
    </Wrapper>
  )
}

Modal.propTypes = {
  id: string,
  open: oneOfType([bool, object]),
  close: func,
  children: node,
}

Modal.defaultProps = {
  id: 'null',
  open: false,
}

export default Modal
