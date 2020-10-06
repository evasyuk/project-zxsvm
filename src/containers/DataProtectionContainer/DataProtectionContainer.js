import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Button } from '../../components'

class DataProtectionContainer extends Component {
  onBack = () => this.props.history.goBack()

  render() {
    return (
      <div>
        Data protection page
        <Button title="Back" onClick={this.onBack} />
      </div>
    )
  }
}

DataProtectionContainer.propTypes = {
  // intl: propTypes.object.isRequired,
  history: propTypes.object.isRequired,
}

export default DataProtectionContainer
