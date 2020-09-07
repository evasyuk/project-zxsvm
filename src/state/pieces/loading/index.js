export const TYPES_LOADING = {
    SET_LOADING: 'SET_LOADING',
}

const default_state = {
    is_loading: false,
}

export const setLoading = (value = false) => ({
    type: TYPES_LOADING.SET_LOADING,
    update: { is_loading: value },
})

export const reducer_loading = (state = default_state, action) => {
    switch (action.type) {
        case TYPES_LOADING.SET_LOADING:
            return {
                ...state,
                ...action.update,
            }
        default:
            return state
    }
}