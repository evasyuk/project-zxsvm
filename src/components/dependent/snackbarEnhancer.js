/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import propTypes from 'prop-types'

import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import { withSnackbar } from 'notistack'
import { clearAllNotifications as mClearNotifications } from '../../state/actions'
import { getNotificationsQueue } from '../../state/selectors'

const mapDispatchToProps = {
  clearAllNotifications: mClearNotifications,
}

const mapStateToProps = (state) => ({
  messageQueue: getNotificationsQueue(state),
})

const getMessage = (intl, item) => {
  const message = intl.formatMessage({
    id: item.message,
  })
  const options = {
    id: item.id,
    variant: item.notificationType,
    autoHideDuration: 3000,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
  }
  return [message, options]
}

function enhancer(ComposedComponent) {
  class WrapperLoginContainer extends Component {
    static propTypes = {
      intl: propTypes.object.isRequired,
      clearAllNotifications: propTypes.func.isRequired,
      messageQueue: propTypes.array.isRequired,
      enqueueSnackbar: propTypes.func.isRequired,
    }

    componentDidUpdate(prevProps) {
      const {
        clearAllNotifications,
        messageQueue,
        enqueueSnackbar,
        intl,
      } = this.props

      if (
        prevProps.messageQueue !== messageQueue &&
        !!messageQueue &&
        messageQueue.length
      ) {
        messageQueue.forEach((item) => {
          const [message, options] = getMessage(intl, item)
          enqueueSnackbar(message, options)
        })
        clearAllNotifications()
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    injectIntl(
      withSnackbar(hoistStatics(WrapperLoginContainer, ComposedComponent)),
    ),
  )
}

export default enhancer
