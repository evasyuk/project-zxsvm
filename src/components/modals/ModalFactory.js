import React from 'react'
import ModalController from 'react-modal-promise'
import styled from 'styled-components'

const ModalProviderWrapper = styled.div`
  position: absolute;
  z-index: 1;

  display: block;
  overflow: hidden;
`

const ModalFactory = () => (
  <ModalProviderWrapper>
    <ModalController />
  </ModalProviderWrapper>
)

export default ModalFactory
