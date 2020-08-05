import { connect } from 'react-redux'
import Notification from './Notification'
import { clearNotification } from '../../../state/actions'
import { getNotificationMessage } from '../../../state/selectors'

const actions = { clearNotification }
const mapStateToProps = state => ({
  notificationMessage: getNotificationMessage(state),
})

export default connect(
  mapStateToProps,
  actions,
)(Notification)
