import React from 'react'
import { func } from 'prop-types'

import HeaderLanding from '../../components/controlled/HeaderLanding'

import { Column, TitleSection } from './styles'
import { Button, Text } from '../../components/base'
import { MobileTopWrapper } from '../../components/styles'

import { LanguageSelect } from '../../components/controlled'

const ChangeLanguage = () => (
  <MobileTopWrapper>
    <LanguageSelect />
  </MobileTopWrapper>
)

const MoreOnGithub = ({ mIntl, goToGithub }) => (
  <MobileTopWrapper>
    <Text>{mIntl('MORE_ON')}</Text>
    <MobileTopWrapper times={0.2}>
      <Button title="Github" onClick={goToGithub} id="github-btn" />
    </MobileTopWrapper>
  </MobileTopWrapper>
)

const FirstSection = ({ mIntl, goToGithub }) => (
  <TitleSection>
    <h1>ZXSVM</h1>
    <MoreOnGithub mIntl={mIntl} goToGithub={goToGithub} />
    <ChangeLanguage />
  </TitleSection>
)

// eslint-disable-next-line no-multi-assign
MoreOnGithub.propTypes = FirstSection.propTypes = {
  mIntl: func.isRequired,
  goToGithub: func.isRequired,
}

const LandingPage = (props) => (
  <>
    <HeaderLanding />
    <Column>
      <FirstSection {...props} />
    </Column>
  </>
)

export default LandingPage
