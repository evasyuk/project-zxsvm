import { connect } from 'react-redux'
import NotificationPortal from './NotificationPortal'

import { clearAllNotifications } from '../../../state/actions'
import { getNotificationsQueue } from '../../../state/selectors'

const mapDispatchToProps = { clearAllNotifications }

const mapStateToProps = (state) => ({
  messageQueue: getNotificationsQueue(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPortal)
