import { showErrorNotification } from '../state/pieces/notification'

export const onActionFailure = (action) => {
  if (action.fields) {
    console.log('absent fields', action.fields)
  }
  action.asyncDispatch(
    showErrorNotification({ message: `ERROR.${action.error}` }),
  )
}
