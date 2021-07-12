import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  max-width: 436px;
  width: 100%;
  z-index: 5;
  border-radius: 6px;
  background: linear-gradient(
          94.17deg
          , #023BCF 0%, #9600AE 73.96%);
  box-shadow: 0px 0px 30px rgb(0 0 0 / 15%);
  padding: 1px;

  > div {
    width: 100%;
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
