/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { object, func, bool } from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { getMyUser, getModalState } from '../../state/selectors'
import { changeModalState } from '../../state/pieces/modals'

import { changePassword, deleteAccount } from '../../state/pieces/users'

const mapStateToProps = (state) => ({
  myUser: getMyUser(state),

  isChangePwdModalOpen: getModalState('changePasswordModal')(state),
  isDeleteAccModalOpen: getModalState('deleteAccountModal')(state),
})

const mapDispatchToProps = {
  changePasswordRequest: changePassword,
  deleteAccountRequest: deleteAccount,

  openChangePwdModal: changeModalState('changePasswordModal', true),
  closeChangePwdModal: changeModalState('changePasswordModal', false),

  openDeleteAccModal: changeModalState('deleteAccountModal', true),
  closeDeleteAccModal: changeModalState('deleteAccountModal', false),
}

function enhancer(ComposedComponent) {
  class WrapperProfile extends Component {
    static propTypes = {
      intl: object.isRequired,
      myUser: object.isRequired,

      changePasswordRequest: func.isRequired,
      deleteAccountRequest: func.isRequired,

      isChangePwdModalOpen: bool.isRequired,
      isDeleteAccModalOpen: bool.isRequired,

      openChangePwdModal: func.isRequired,
      openDeleteAccModal: func.isRequired,

      closeChangePwdModal: func.isRequired,
      closeDeleteAccModal: func.isRequired,
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

    onDeleteAccount = () => {
      this.props.deleteAccountRequest()
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          mIntl={this.mIntl}
          onChangePassword={this.onChangePassword}
          onDeleteAccount={this.onDeleteAccount}
        />
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(injectIntl(hoistStatics(WrapperProfile, ComposedComponent)))
}

export default enhancer
