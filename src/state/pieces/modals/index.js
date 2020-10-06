export const TYPES_MODALS = {
  CHANGE_MODAL_STATE: 'change_modal_state',
}

export const defaultStateModal = {
  activeModals: {},
}

export const changeModalState = (key, value) => () => ({
  type: TYPES_MODALS.CHANGE_MODAL_STATE,
  update: { [key]: value },
})

export const reducerModals = (state = defaultStateModal, action) => {
  switch (action.type) {
    case TYPES_MODALS.CHANGE_MODAL_STATE:
      return {
        ...state,
        activeModals: {
          ...state.activeModals,
          ...action.update,
        },
      }
    default:
      return state
  }
}
