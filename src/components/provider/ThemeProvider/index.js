import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { getThemeStyles } from '../../../state/selectors'

const ThemeProvider = (props) => {
  const { theme } = useSelector((state) => ({
    theme: getThemeStyles(state),
  }))

  return <StyledThemeProvider theme={theme} {...props} />
}

export default ThemeProvider
