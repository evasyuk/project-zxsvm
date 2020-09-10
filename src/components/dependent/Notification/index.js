import { connect } from 'react-redux'
import NotificationItem from './NotificationItem'

import { clearNotification } from '../../../state/actions'
import { getNotificationMessage } from '../../../state/selectors'

const actions = { clearNotification }

const mapStateToProps = (state) => ({
  notificationMessage: getNotificationMessage(state),
})

export default connect(mapStateToProps, actions)(NotificationItem)
