import React from 'react'
import { func, string } from 'prop-types'
import { withSnackbar } from 'notistack'
import { Icon } from '../../../components'
import styled from 'styled-components'

export const IconWrapper = styled.div``

class Notification extends React.Component {
  static propTypes = {
    clearNotification: func,
    closeSnackbar: func,
    notificationMessage: string,
  }
  static defaultProps = {
    clearNotification: () => {},
    notificationMessage: '',
  }

  componentDidUpdate(prevProps) {
    const {
      closeSnackbar,
      clearNotification,
      notificationMessage,
      enqueueSnackbar,
    } = this.props

    const action = key => (
      <IconWrapper onClick={() => { closeSnackbar(key) }}>
        <Icon name="close" color="currentColor" width={20} height={20} />
      </IconWrapper>
    );

    if (
      prevProps.notificationMessage !== notificationMessage &&
      !!notificationMessage
    ) {
      enqueueSnackbar(notificationMessage, {
        id: 'notification',
        variant: 'error',
        action,
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
      clearNotification()
    }
  }
  render() {
    return null
  }
}

export default withSnackbar(Notification)
