import React from 'react'
import propTypes from 'prop-types'

import { createModal } from 'react-modal-promise'

import { injectIntl } from 'react-intl'
import { TopWrapper, TopBackground, ModalWindow } from '../styles'

import { SignUpForm } from '../forms'

const onSignUp = () => {
  console.log('SignUpModal onSignUp')
}

// eslint-disable-next-line prettier/prettier
const SignUpModal = ({ intl, close }) => (
  <TopWrapper>
    <TopBackground />
    <ModalWindow>
      <SignUpForm intl={intl} onClose={close} onSignUp={onSignUp} />
    </ModalWindow>
  </TopWrapper>
)

SignUpModal.propTypes = {
  // open: propTypes.func.isRequired,
  intl: propTypes.object.isRequired,
  close: propTypes.func.isRequired,
}

const promise = createModal(injectIntl(SignUpModal), {
  enterTimeout: 10,
  exitTimeout: 10,
})

export const createSignUpModal = (value = 'default_value') => () => {
  console.log('', value)
  promise({ value }).catch((err) => {
    console.log(err)
  })
}
