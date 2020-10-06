import React from 'react'
import { func, object, bool } from 'prop-types'
import Modal from 'react-modal'

import { defaultStyles } from './styles'
import {
  MobileMainContent,
  MobileMainSection,
  MobileNoContent,
  MobileTopWrapper,
  MobileWindow,
} from '../styles'

import ChangePasswordForm from '../forms/ChangePasswordForm'
import { Title } from '../base'

const renderMobile = ({ intl, mIntl, onChangePassword }) => (
  <MobileWindow>
    <MobileNoContent />

    <MobileMainContent>
      <MobileMainSection>
        <MobileTopWrapper times={1}>
          <Title title={mIntl('CHANGE_PASSWORD')} />
          <MobileTopWrapper>
            <ChangePasswordForm
              intl={intl}
              onChangePassword={onChangePassword}
            />
          </MobileTopWrapper>
        </MobileTopWrapper>
      </MobileMainSection>
    </MobileMainContent>

    <MobileNoContent />
  </MobileWindow>
)

const ChangePasswordModal = ({
  isOpen,
  close,
  intl,
  mIntl,
  onChangePassword,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={close}
    style={defaultStyles}
    contentLabel="Change Password Modal"
  >
    {renderMobile({ intl, mIntl, onChangePassword })}
  </Modal>
)

ChangePasswordModal.propTypes = {
  isOpen: bool.isRequired,
  close: func.isRequired,
  intl: object.isRequired,
  mIntl: func.isRequired,
  onChangePassword: func.isRequired,
}

export default ChangePasswordModal
