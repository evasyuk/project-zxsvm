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
import ProfilePhotoModal from '../../components/modals/ProfilePhotoModal'

class Profile extends Component {
  renderContactBlock = ({ displayName, phoneNumber, email, photoURL }) => (
    <ContactBlockWrapper times={2}>
      <Avatar imageUrl={photoURL} />
      <Title title={displayName} />
      <Title title={phoneNumber} />
      <Title title={email} />
    </ContactBlockWrapper>
  )

  renderActionsBlock = ({
    mIntl,
    onChangePassword,
    onDeletePassword,
    onPhoto,
  }) => (
    <ContactBlockWrapper times={1}>
      <ActionsBlockWrapper>
        <ActionWrapper>
          <Button
            fullWidth
            title={mIntl('UPDATE_PHOTO_BTN')}
            onClick={onPhoto}
            id="change-photo-btn"
          />
        </ActionWrapper>
        <ActionWrapper>
          <Button
            fullWidth
            title={mIntl('CHANGE_PASSWORD')}
            onClick={onChangePassword}
            id="change-password-btn"
          />
        </ActionWrapper>
        <ActionWrapper>
          <Button
            fullWidth
            title={mIntl('DELETE_ACCOUNT')}
            onClick={onDeletePassword}
            id="delete-acc-btn"
          />
        </ActionWrapper>
      </ActionsBlockWrapper>
    </ContactBlockWrapper>
  )

  renderMobile = ({
    photoURL,
    displayName,
    phoneNumber,
    email,
    mIntl,
    onChangePassword,
    onDeletePassword,
    onPhoto,
  }) => (
    <MobileWindow>
      <MobileNoContent />

      <MobileMainContent>
        <MobileMainSection>
          {this.renderContactBlock({
            displayName,
            phoneNumber,
            email,
            photoURL,
          })}
          {this.renderActionsBlock({
            mIntl,
            onChangePassword,
            onDeletePassword,
            onPhoto,
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
      openChangePwdModal,
      openDeleteAccModal,
      openProfilePhotoModal,
    } = this.props

    // TODO: fix bug with crash on myUser === null
    if (!myUser?.displayName) {
      return null
    }

    return (
      <>
        <ModalWrapper>
          <ProfilePhotoModal />
          <ChangePasswordModal />
          <DeleteAccountModal />
        </ModalWrapper>
        <div>
          {this.renderMobile({
            photoURL: myUser.photoURL,
            displayName: myUser.displayName,
            phoneNumber: myUser.phoneNumber,
            email: myUser.email,
            mIntl,
            onChangePassword: openChangePwdModal,
            onDeletePassword: openDeleteAccModal,
            onPhoto: openProfilePhotoModal,
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
  openProfilePhotoModal: func.isRequired,
}

export default Profile
