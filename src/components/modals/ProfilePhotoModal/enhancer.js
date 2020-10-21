/* eslint-disable */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { object, func, bool } from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { getModalState } from '../../../state/selectors'
import { changeModalState } from '../../../state/pieces/modals'

import { deletePhoto, uploadPhoto } from '../../../state/pieces/users'

const mapStateToProps = (state) => ({
  isProfilePhotoModalOpen: getModalState('profilePhotoModal')(state),
})

const mapDispatchToProps = {
  deletePhotoRequest: deletePhoto,
  uploadPhotoRequest: uploadPhoto,

  closeProfilePhotoModal: changeModalState('profilePhotoModal', false),
}

function enhancer(ComposedComponent) {
  class WrapperChangePwdModal extends Component {
    static propTypes = {
      intl: object.isRequired,

      deletePhotoRequest: func.isRequired,
      uploadPhotoRequest: func.isRequired,

      isProfilePhotoModalOpen: bool.isRequired,
      closeProfilePhotoModal: func.isRequired,
    }

    mIntl = (element, group = 'PROFILE') =>
      this.props.intl.formatMessage({
        id: `${group}.${element}`,
      })

    onFile = (e) => {
      let onSuccess, onFailure
      onSuccess = onFailure = this.props.closeProfilePhotoModal
      const data = new FormData()
      data.append('picture', e.target.files[0])
      this.props.uploadPhotoRequest(data, { onSuccess, onFailure })
    }

    deleteCurrentPicture = () => {
      this.props.deletePhotoRequest()
    }

    render() {
      const { isProfilePhotoModalOpen, closeProfilePhotoModal } = this.props

      return (
        <ComposedComponent
          {...this.props}
          mIntl={this.mIntl}
          uploadNewPicture={this.uploadNewPicture}
          deleteCurrentPicture={this.deleteCurrentPicture}
          isOpen={isProfilePhotoModalOpen}
          close={closeProfilePhotoModal}
          onFile={this.onFile}
        />
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(injectIntl(hoistStatics(WrapperChangePwdModal, ComposedComponent)))
}

export default enhancer
