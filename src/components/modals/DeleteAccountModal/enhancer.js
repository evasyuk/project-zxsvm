/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { object, func, bool } from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { getModalState } from '../../../state/selectors'
import { changeModalState } from '../../../state/pieces/modals'

import { deleteAccount } from '../../../state/pieces/users'

const mapStateToProps = (state) => ({
  isDeleteAccModalOpen: getModalState('deleteAccountModal')(state),
})

const mapDispatchToProps = {
  deleteAccountRequest: deleteAccount,

  openDeleteAccModal: changeModalState('deleteAccountModal', true),
  closeDeleteAccModal: changeModalState('deleteAccountModal', false),
}

function enhancer(ComposedComponent) {
  class WrapperChangePwdModal extends Component {
    static propTypes = {
      intl: object.isRequired,
      deleteAccountRequest: func.isRequired,

      isDeleteAccModalOpen: bool.isRequired,

      openDeleteAccModal: func.isRequired,

      closeDeleteAccModal: func.isRequired,
    }

    mIntl = (element, group = 'PROFILE') =>
      this.props.intl.formatMessage({
        id: `${group}.${element}`,
      })

    onDeleteAccount = () => {
      this.props.deleteAccountRequest()
    }

    render() {
      const { isDeleteAccModalOpen, closeDeleteAccModal } = this.props

      return (
        <ComposedComponent
          {...this.props}
          mIntl={this.mIntl}
          onDeleteAccount={this.onDeleteAccount}
          isOpen={isDeleteAccModalOpen}
          close={closeDeleteAccModal}
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
