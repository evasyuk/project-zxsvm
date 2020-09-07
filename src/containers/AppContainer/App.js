import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux' // ToDo: move as independent

import { clearStorage } from '../../helpers/storage'
// import {
//     getLocales,
//     getAvailableLanguages,
//     getTermsOfUse,
//     changeModalState,
// } from '../../state/actions'
// import { getAppLanguage } from '../../state/selectors'

import { AppCrashModal } from '../../components/modals'

import AppRouter from './AppRouter'

class App extends Component {
    state = {
        showDialog: false,
        error: null,
        info: null,
    }

    componentDidMount() {
        // const { currentLanguage } = this.props

        // this.props.getAvailableLanguages()
        // this.props.getLocales(currentLanguage)
        // this.props.getTermsOfUse(currentLanguage)

        console.log('App did mount')
    }

    componentDidCatch(error, info) {
        this.setState({ error, info, showDialog: true })
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

// const mapStateToProps = state => ({
//     currentLanguage: getAppLanguage(state),
// })
//
// const mapDispatchToProps = {
//     getLocales,
//     getAvailableLanguages,
//     getTermsOfUse,
//     changeModalState,
// }

export default withRouter(
    App
)
