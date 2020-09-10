const dsn = false
export const reportError = (error) => {
  if (!error) {
    console.log('no error passed!')
    return
  }
  if (dsn) {
    // Sentry.captureException(error)
  }
}
