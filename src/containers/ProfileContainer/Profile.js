import React, { Component } from 'react'
import { object, func, bool } from 'prop-types'

import {
  MobileWindow,
  MobileMainContent,
  MobileNoContent,
  MobileMainSection,
} from '../../components/styles'

import { Avatar, Title, Button } from '../../components'

import {
  ContactBlockWrapper,
  ActionsBlockWrapper,
  ActionWrapper,
} from './styles'

import ChangePasswordModal from '../../components/modals/ChangePasswordModal'
import DeleteAccountModal from '../../components/modals/DeleteAccountModal'

class Profile extends Component {
  renderContactBlock = ({ displayName, phoneNumber, email }) => (
    <ContactBlockWrapper times={2}>
      <Avatar imageUrl={null} />
      <Title title={displayName} />
      <Title title={phoneNumber} />
      <Title title={email} />
    </ContactBlockWrapper>
  )

  renderActionsBlock = ({ mIntl, onChangePassword, onDeletePassword }) => (
    <ContactBlockWrapper times={1}>
      <ActionsBlockWrapper>
        <ActionWrapper>
          <Button title={mIntl('CHANGE_PASSWORD')} onClick={onChangePassword} />
        </ActionWrapper>
        <ActionWrapper>
          <Button title={mIntl('DELETE_ACCOUNT')} onClick={onDeletePassword} />
        </ActionWrapper>
      </ActionsBlockWrapper>
    </ContactBlockWrapper>
  )

  renderMobile = ({
    displayName,
    phoneNumber,
    email,
    mIntl,
    onChangePassword,
    onDeletePassword,
  }) => (
    <MobileWindow>
      <MobileNoContent />

      <MobileMainContent>
        <MobileMainSection>
          {this.renderContactBlock({ displayName, phoneNumber, email })}
          {this.renderActionsBlock({
            mIntl,
            onChangePassword,
            onDeletePassword,
          })}
        </MobileMainSection>
      </MobileMainContent>

      <MobileNoContent />
    </MobileWindow>
  )

  render() {
    const {
      myUser,
      mIntl,
      intl,
      isChangePwdModalOpen,
      isDeleteAccModalOpen,
      openChangePwdModal,
      openDeleteAccModal,
      closeChangePwdModal,
      closeDeleteAccModal,
    } = this.props

    // TODO: fix bug with crash on myUser === null
    if (!myUser?.displayName) {
      return null
    }

    return (
      <>
        <ChangePasswordModal
          isOpen={isChangePwdModalOpen}
          close={closeChangePwdModal}
          intl={intl}
          mIntl={mIntl}
          onChangePassword={() => console.log('onChangePassword!')}
        />
        <DeleteAccountModal
          isOpen={isDeleteAccModalOpen}
          close={closeDeleteAccModal}
          intl={intl}
          mIntl={mIntl}
          onDeleteAccount={() => console.log('onDeleteAccount!')}
        />
        <div>
          {this.renderMobile({
            displayName: myUser.displayName,
            phoneNumber: myUser.phoneNumber,
            email: myUser.email,
            mIntl,
            onChangePassword: openChangePwdModal,
            onDeletePassword: openDeleteAccModal,
          })}
        </div>
      </>
    )
  }
}

Profile.propTypes = {
  myUser: object.isRequired,
  mIntl: func.isRequired,
  intl: object.isRequired,
  isChangePwdModalOpen: bool.isRequired,
  isDeleteAccModalOpen: bool.isRequired,
  openChangePwdModal: func.isRequired,
  openDeleteAccModal: func.isRequired,
  closeChangePwdModal: func.isRequired,
  closeDeleteAccModal: func.isRequired,
  // onChangePassword: func.isRequired,
  // onDeletePassword: func.isRequired,
}

export default Profile
