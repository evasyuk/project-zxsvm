/* eslint-disable react/static-property-placement */
import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { object } from 'prop-types'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

const mapStateToProps = null

const mapDispatchToProps = null

function enhancer(ComposedComponent) {
  const LandingPageWrapper = (props) => {
    const goToGithub = () =>
      window.open('https://github.com/evasyuk/project-zxsvm')

    const mIntl = (element, group = 'LANDING') =>
      props.intl.formatMessage({
        id: `${group}.${element}`,
      })

    return (
      <ComposedComponent {...props} goToGithub={goToGithub} mIntl={mIntl} />
    )
  }

  LandingPageWrapper.propTypes = {
    intl: object.isRequired,
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(injectIntl(hoistStatics(LandingPageWrapper, ComposedComponent))))
}

export default enhancer
