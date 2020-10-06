import { createSelector } from 'reselect'

export const getActiveModals = createSelector(
  (state) => state.modals,
  (modals) => modals.activeModals,
)

export const getModalState = (key) => {
  if (!key) {
    throw Error('getModalState error: missing key')
  }
  return createSelector(
    getActiveModals,
    (modals) => modals.activeModals,
    (activeModals) => activeModals[key] || false,
  )
}
