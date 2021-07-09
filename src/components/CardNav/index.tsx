import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 40px;
  > div {
    padding: 6px;
    background: linear-gradient(94.17deg, #0947E7 0%, #CF00F0 73.96%);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.45);
    border-radius: 20px;
    height: 32px;
    > a {
      height: 22px;
    }
    > a[variant="subtle"] {
      color: black;
      background-color: white;
    }
    > a[variant="tertiary"] {
      color: white;
    }
  }
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {TranslateString(1142, 'Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {TranslateString(262, 'Liquidity')}
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
