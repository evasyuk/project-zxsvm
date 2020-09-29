import React from 'react'
import propTypes from 'prop-types'
import { withSnackbar } from 'notistack'

class NotificationPortal extends React.Component {
  componentDidUpdate(prevProps) {
    const { clearAllNotifications, messageQueue, enqueueSnackbar } = this.props

    if (
      prevProps.messageQueue !== messageQueue &&
      !!messageQueue &&
      messageQueue.length
    ) {
      messageQueue.forEach((item) => {
        enqueueSnackbar(item.message, {
          id: 'notification',
          variant: item.notificationType,
          autoHideDuration: 3000,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
        })
      })
      clearAllNotifications()
    }
  }

  render() {
    return null
  }
}

NotificationPortal.propTypes = {
  clearAllNotifications: propTypes.func.isRequired,
  messageQueue: propTypes.array.isRequired,
  enqueueSnackbar: propTypes.func.isRequired,
}

export default withSnackbar(NotificationPortal)
