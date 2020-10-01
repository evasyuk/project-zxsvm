import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import { privacyPolicy } from '../../constants/privacyPolicy'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: auto;
`

const Markdown = styled(ReactMarkdown)`
  width: 90%;
  height: 90%;
`

const PrivacyContainer = () => (
  <Wrapper>
    <Markdown source={privacyPolicy} />
  </Wrapper>
)

export default PrivacyContainer
