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

import DeleteAccountForm from '../forms/DeleteAccountForm'
import { Title } from '../base'

// prettier-ignore
const renderMobile = ({ intl, mIntl, onDeleteAccount }) => (
  <MobileWindow>
    <MobileNoContent />

    <MobileMainContent>
      <MobileMainSection>
        <MobileTopWrapper times={1}>
          <Title title={mIntl('DELETE_ACCOUNT')} />
          <MobileTopWrapper>
            <DeleteAccountForm
              intl={intl}
              onDeleteAccount={onDeleteAccount}
            />
          </MobileTopWrapper>
        </MobileTopWrapper>
      </MobileMainSection>
    </MobileMainContent>

    <MobileNoContent />
  </MobileWindow>
)

const DeleteAccountModal = ({
  isOpen,
  close,
  intl,
  mIntl,
  onDeleteAccount,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={close}
    style={defaultStyles}
    contentLabel="Delete Account Modal"
  >
    {renderMobile({ intl, mIntl, onDeleteAccount })}
  </Modal>
)

DeleteAccountModal.propTypes = {
  isOpen: bool.isRequired,
  close: func.isRequired,
  intl: object.isRequired,
  mIntl: func.isRequired,
  onDeleteAccount: func.isRequired,
}

export default DeleteAccountModal
