import React from 'react'
import propTypes from 'prop-types'
import { ModalWindow, TopBackground, TopWrapper } from '../styles'

export const Modal = ({ close, children }) => (
  <TopWrapper>
    <ModalWindow>{children}</ModalWindow>
    <TopBackground onClick={close} />
  </TopWrapper>
)

Modal.propTypes = {
  // open: propTypes.func.isRequired,
  // intl: propTypes.object.isRequired,
  close: propTypes.func.isRequired,
  children: propTypes.array.isRequired,
}
