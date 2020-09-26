import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { clearStorage } from '../../helpers/storage'

import { AppCrashModal } from '../../components/modals'

import AppRouter from './AppRouter'

class App extends Component {
  state = {
    showDialog: false,
    error: null,
    // info: null,
  }

  componentDidMount() {
    this.forceRestart = window.addEventListener('keydown', (event) => {
      if (event.key === 'G' && event.shiftKey) {
        clearStorage()
        window.location.reload()
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener(this.forceRestart)
  }

  componentDidCatch(error, info) {
    this.setState({ error, showDialog: true })
    console.log(error, info)
  }

  handleCrash = () => {
    // reportError(this.state.error)
    clearStorage()
    window.location.reload()
  }

  render() {
    const { showDialog, error } = this.state

    return error ? (
      <AppCrashModal isVisible={showDialog} onPress={this.handleCrash} />
    ) : (
      <AppRouter />
    )
  }
}

export default withRouter(App)
