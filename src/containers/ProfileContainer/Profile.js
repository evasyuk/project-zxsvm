import React, { Component } from 'react'
import { object, func } from 'prop-types'

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
  ModalWrapper,
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
          <Button
            title={mIntl('CHANGE_PASSWORD')}
            onClick={onChangePassword}
            id="change-password-btn"
          />
        </ActionWrapper>
        <ActionWrapper>
          <Button
            title={mIntl('DELETE_ACCOUNT')}
            onClick={onDeletePassword}
            id="delete-acc-btn"
          />
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
    const { myUser, mIntl, openChangePwdModal, openDeleteAccModal } = this.props

    // TODO: fix bug with crash on myUser === null
    if (!myUser?.displayName) {
      return null
    }

    return (
      <>
        <ModalWrapper>
          <ChangePasswordModal />
          <DeleteAccountModal />
        </ModalWrapper>
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
  openChangePwdModal: func.isRequired,
  openDeleteAccModal: func.isRequired,
}

export default Profile
