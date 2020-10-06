/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { object, func, bool } from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { getMyUser, getModalState } from '../../state/selectors'
import { changeModalState } from '../../state/pieces/modals'

// import { changePassword, deletePassword } from '../../state/pieces/users'

const mapStateToProps = (state) => ({
  myUser: getMyUser(state),

  isChangePwdModalOpen: getModalState('changePasswordModal')(state),
  isDeleteAccModalOpen: getModalState('deleteAccountModal')(state),
})

const mapDispatchToProps = {
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
      deletePasswordRequest: func.isRequired,

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

    onChangePassword = () => {
      // this.props.changePasswordRequest(password)
    }

    onDeletePassword = () => {
      // this.props.deletePasswordRequest()
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          mIntl={this.mIntl}
          // onChangePassword={this.onChangePassword}
          // onDeletePassword={this.onDeletePassword}
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
