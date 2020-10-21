/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { object, func, bool } from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { getModalState } from '../../../state/selectors'
import { changeModalState } from '../../../state/pieces/modals'

import { changePassword } from '../../../state/pieces/users'

const mapStateToProps = (state) => ({
  isChangePwdModalOpen: getModalState('changePasswordModal')(state),
})

const mapDispatchToProps = {
  changePasswordRequest: changePassword,

  openChangePwdModal: changeModalState('changePasswordModal', true),
  closeChangePwdModal: changeModalState('changePasswordModal', false),
}

function enhancer(ComposedComponent) {
  class WrapperChangePwdModal extends Component {
    static propTypes = {
      intl: object.isRequired,

      changePasswordRequest: func.isRequired,

      isChangePwdModalOpen: bool.isRequired,

      openChangePwdModal: func.isRequired,

      closeChangePwdModal: func.isRequired,
    }

    mIntl = (element, group = 'PROFILE') =>
      this.props.intl.formatMessage({
        id: `${group}.${element}`,
      })

    onChangePassword = (password) => {
      this.props.changePasswordRequest(password, {
        onSuccess: this.props.closeChangePwdModal,
      })
    }

    render() {
      const { isChangePwdModalOpen, closeChangePwdModal } = this.props

      return (
        <ComposedComponent
          {...this.props}
          mIntl={this.mIntl}
          onChangePassword={this.onChangePassword}
          isOpen={isChangePwdModalOpen}
          close={closeChangePwdModal}
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
