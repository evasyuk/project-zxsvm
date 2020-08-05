export const getItemAsync = key =>
  new Promise(resolve => {
    resolve(window.localStorage.getItem(key))
  })

export const removeItemAsync = key =>
  new Promise(resolve => {
    resolve(window.localStorage.removeItem(key))
  })

export const setItemAsync = (key, value) =>
  new Promise(resolve => {
    resolve(window.localStorage.setItem(key, value))
  })

export const clearStorage = () => {
  window.localStorage.clear()
  // persistor.flush()
  // persistor.purge()
}
