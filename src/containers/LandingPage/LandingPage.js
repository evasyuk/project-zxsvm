import React from 'react'

import HeaderLanding from '../../components/controlled/HeaderLanding'

import { Column, TitleSection } from './styles'
import { Button, Text } from '../../components/base'
import { MobileTopWrapper } from '../../components/styles'

const MoreOnGithub = () => (
  <MobileTopWrapper>
    <Text>More on</Text>
    <MobileTopWrapper times={0.2}>
      <Button title="Github" />
    </MobileTopWrapper>
  </MobileTopWrapper>
)

const FirstSection = () => (
  <TitleSection>
    <h1>ZXSVM</h1>
    <MoreOnGithub />
  </TitleSection>
)

const LandingPage = () => (
  <>
    <HeaderLanding />
    <Column>
      <FirstSection />
    </Column>
  </>
)

export default LandingPage
