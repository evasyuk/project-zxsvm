/* eslint-disable react/no-array-index-key, react/prop-types */
import React from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components'

import { Text } from '../../base'
import { MobileTopWrapper } from '../../styles'

import { WidthContainer, ItemStyles } from './styles'
import {
  getActiveTranslation,
  getAllPossibleLocaleKeyOptions,
} from '../../../state/pieces/locale/selectorLocale'
import { actionSetActiveLocaleByKey } from '../../../state/pieces/locale'

// TODO: improve performance
const LanguageSelect = ({
  onChangeLocale,
  activeLanguageKey,
  localeKeyOptions,
}) => (
  <MobileTopWrapper>
    <Text>Change language</Text>
    <WidthContainer>
      {localeKeyOptions.map((text, index) => (
        <ItemStyles
          id={`lang-key-${text}`}
          chosenOption={text === activeLanguageKey}
          onClick={() => {
            if (text !== activeLanguageKey) {
              onChangeLocale(text)
            }
          }}
          key={`${index}${text}`}
        >
          {text}
        </ItemStyles>
      ))}
    </WidthContainer>
  </MobileTopWrapper>
)

const mapStateToProps = (state) => ({
  activeLanguageKey: getActiveTranslation(state).lang_key,
  localeKeyOptions: getAllPossibleLocaleKeyOptions(state),
})

const mapDispatchToProps = {
  onChangeLocale: actionSetActiveLocaleByKey,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(LanguageSelect))
