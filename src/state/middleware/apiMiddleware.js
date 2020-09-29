export default function apiMiddleware(api) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return dispatch(action((selector) => selector(getState())))
    }

    const { promise, types, ...rest } = action
    //
    // console.log('apiMiddleware action', action)

    if (!promise) return next(action)

    const [REQUEST, SUCCESS, FAILURE] = types

    next({ ...rest, type: REQUEST })

    return promise(api).then(
      (data) => next({ ...rest, data, type: SUCCESS }),
      // eslint-disable-next-line prettier/prettier
      (error) => // TODO: improve
        next({
          ...rest,
          error:
            error.response && error.response.data
              ? error.response.data.message
              : error.message,
          type: FAILURE,
        }),
    )
  }
}
