import React from 'react'
import { func, object, bool } from 'prop-types'
import Modal from 'react-modal'

import { defaultStyles } from '../styles'
import {
  MobileMainContent,
  MobileMainSection,
  MobileNoContent,
  MobileTopWrapper,
  MobileWindow,
} from '../../styles'

import { Title } from '../../base'

const renderMobile = ({ mIntl, onFile, onDelete }) => (
  <MobileWindow>
    <MobileNoContent />

    <MobileMainContent>
      <MobileMainSection>
        <MobileTopWrapper times={1}>
          <Title title={mIntl('UPDATE_PHOTO_TITLE')} />
          <MobileTopWrapper>
            <form>
              <input type="file" accept="image/*" onChange={onFile} />
              <button type="button" onClick={onDelete}>
                Delete
              </button>
            </form>
          </MobileTopWrapper>
        </MobileTopWrapper>
      </MobileMainSection>
    </MobileMainContent>

    <MobileNoContent />
  </MobileWindow>
)

const ProfilePhotoModal = ({
  isOpen,
  close,
  intl,
  mIntl,
  onDelete,
  onFile,
}) => (
  <Modal
    isOpen={isOpen}
    onAfterOpen={() => {
      document.body.style.overflow = 'hidden'
    }}
    onRequestClose={() => {
      close()
      document.body.removeAttribute('style')
    }}
    style={defaultStyles}
    contentLabel="Manage Profile Photo Modal"
  >
    {renderMobile({
      intl,
      mIntl,
      onFile,
      onDelete,
    })}
  </Modal>
)

ProfilePhotoModal.propTypes = {
  isOpen: bool.isRequired,
  close: func.isRequired,
  intl: object.isRequired,
  mIntl: func.isRequired,
  onFile: func.isRequired,
  onDelete: func.isRequired,
}

export default ProfilePhotoModal
