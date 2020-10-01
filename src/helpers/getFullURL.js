export const getFullURL = (desiredPath) => {
  let path = desiredPath
  const urlElements = window.location.href.split('/')

  if (!desiredPath.startsWith('/')) {
    path = `/${desiredPath}`
  }

  return `${urlElements[0]}//${urlElements[2]}${path}`
}
