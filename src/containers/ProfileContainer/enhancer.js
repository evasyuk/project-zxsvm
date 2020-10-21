/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { object, func } from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { getMyUser } from '../../state/selectors'
import { changeModalState } from '../../state/pieces/modals'

const mapStateToProps = (state) => ({
  myUser: getMyUser(state),
})

const mapDispatchToProps = {
  openChangePwdModal: changeModalState('changePasswordModal', true),
  openDeleteAccModal: changeModalState('deleteAccountModal', true),
  openProfilePhotoModal: changeModalState('profilePhotoModal', true),
}

function enhancer(ComposedComponent) {
  class WrapperProfile extends Component {
    static propTypes = {
      intl: object.isRequired,

      openChangePwdModal: func.isRequired,
      openDeleteAccModal: func.isRequired,
      openProfilePhotoModal: func.isRequired,
    }

    mIntl = (element, group = 'PROFILE') =>
      this.props.intl.formatMessage({
        id: `${group}.${element}`,
      })

    render() {
      return <ComposedComponent {...this.props} mIntl={this.mIntl} />
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(injectIntl(hoistStatics(WrapperProfile, ComposedComponent)))
}

export default enhancer
