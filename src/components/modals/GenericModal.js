import React from 'react'
import Modal from 'react-modal'

import { defaultStyles } from './styles'

const GenericModal = ({ isOpen, close, afterOpenModal = () => {} }) => (
  <Modal
    isOpen={isOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={afterOpenModal}
    style={defaultStyles}
    contentLabel="Example Modal"
  >
    <h2>Hello</h2>
    <button onClick={close}>close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal>
)

export default GenericModal
