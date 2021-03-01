/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import 'intl'
import { IntlProvider as ReactIntlProvider } from 'react-intl'

import { getActiveTranslation } from '../../../state/selectors'

const IntlProvider = (props) => {
  const { lang_key, dictionary } = useSelector(getActiveTranslation)

  return (
    <ReactIntlProvider locale={lang_key} messages={dictionary} {...props} />
  )
}

export default IntlProvider
