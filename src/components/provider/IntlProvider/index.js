import React from 'react'
import { useSelector } from 'react-redux'
import 'intl'
import { IntlProvider as ReactIntlProvider } from 'react-intl'

import { getFlatTranslations } from '../../../state/selectors'

const IntlProvider = props => {
  const { locale, messages } = useSelector(state => ({
    locale: 'en',
    messages: getFlatTranslations(state),
  }))

  return <ReactIntlProvider locale={locale} messages={messages} {...props} />
}

export default IntlProvider
