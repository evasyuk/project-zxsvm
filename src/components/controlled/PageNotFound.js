import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: red;
`

const PageNotFound = ({ location }) => (
  <Wrapper>
    <h1>page {location.pathname} note found</h1>
  </Wrapper>
)

PageNotFound.propTypes = {
  location: propTypes.object.isRequired,
}

export default withRouter(PageNotFound)
