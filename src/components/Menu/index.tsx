import React, { useContext, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import {useWalletModal} from '@pancakeswap-libs/uikit'
import {useLocation, Link} from "react-router-dom";
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'
import MenuItemList from './config'

const Nav = styled.nav`
  z-index: 20;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 62px;
  padding: 0 14px 0 18px;
  border-bottom: 1px solid #422794;
  align-items: center;

  a.logo {
    display: block;
    width: 50vw;
    ${({theme}) => theme.mediaQueries.sm} {
      width: 259px;
    }
  }

  .personal {
    display: flex;

    .profile {
      display: block;

      img {
        width: 28px;
        height: 28px;
      }
    }
  }


`

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);

  &.close {
    display: none;
  }

  ${({theme}) => theme.mediaQueries.sm} {
    // SP drawer menu
    flex-direction: initial;
    justify-content: space-between;
    position: initial;
    top: initial;
    left: initial;
    width: initial;
    height: initial;
    background: initial;
    &.close {
      display: flex;
    }
  }

  a {
    ${({theme}) => theme.mediaQueries.sm} {
      width: 100%;
      margin-bottom: 0;
      font-weight: 100;
      color: #ffffff;
      display: block;
      font-size: 14px;
      padding: 0 21.5px;
      line-height: 59px;
      text-align: center;
      border-bottom: 2px solid transparent;
      opacity: 0.36;
    }
    width: 100vw;
    padding-left: 8vw;
    margin-bottom: 20px;
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    line-height: 39px;
    color: #FFFFFF;

    &.github {
      opacity: 1;
      display: flex;
    }

  }

  a.active {
    opacity: 1;
    font-weight: bold;
    border-image: none;
    ${({theme}) => theme.mediaQueries.sm} {
      border-image: linear-gradient(90deg, #0947e7, #cf00f0);
      border-image-slice: 1;
    }
  }

  a > img {
    width: 28px;
    ${({theme}) => theme.mediaQueries.sm} {
      width: 18px;
    }
  }
`

const MenuButton = styled.img`
  ${({theme}) => theme.mediaQueries.sm} {
    display: none;
  }
`

const CloseButton = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  ${({theme}) => theme.mediaQueries.sm} {
    display: none;
  }
`
const StyledButton = styled.button`
  width: 84px;
  height: 30px;
  margin-right: 10px;
  background-color: #6000ac;
  color: #fff;
  font-weight: bold;
  border-radius: 17px;
  border: 0;
  line-height: 16.41px;
  cursor: pointer;
`


const Menu: React.FC = ({ children }) => {
  const location = useLocation()
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const [closedMenu, setClosedMenu] = useState(true);
// eslint-disable-next-line
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
// eslint-disable-next-line
  const { isDark, toggleTheme } = useTheme()
// eslint-disable-next-line
  const profile = useGetLocalProfile()
  const {onPresentConnectModal, onPresentAccountModal} = useWalletModal(login, logout)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const handleCtaClick = () => {
    if (!account) {
      onPresentConnectModal()
    } else {
      onPresentAccountModal()
    }
  }

  const handleNavListClick = (e) => {
    e.stopPropagation()
  }

  const handleMenuButtonClick = () => {
    setClosedMenu(false)
  }
  const handleMenuCloseButtonClick = () => {
    setClosedMenu(true)
  }
  return (
    <>
    <Nav>
      {closedMenu && (
        <MenuButton onClick={handleMenuButtonClick} src="/images/menu-icon.svg" alt="open" />
      )}
      <a href="/" className="logo">
        <img src="/images/h_logo.png" alt="Golden retriever finance"/>
      </a>
      <NavList className={closedMenu ? 'close' : 'open'} onClick={handleNavListClick}>
        <CloseButton onClick={handleMenuCloseButtonClick} src="/images/close.svg" alt="close"/>
        {MenuItemList.map((item) =>
          item.href.toString().startsWith('http') ?
            (<a href={item.href} className={location.pathname === item.href ? 'active' : ''}>
              {item.label}
            </a>)
            :
            (<Link onClick={handleMenuCloseButtonClick} to={item.href} className={location.pathname === item.href ? 'active' : ''} >{item.label}</Link>)
          )}
        <a href="https://github.com/goldenretriever-finance/goldenretriever-interface" className="github">
          <img src="/images/mark-github.png" alt="github"/>
        </a>
      </NavList>
      <div className="personal">
        {account ? (
          <StyledButton onClick={() => handleCtaClick()}>{accountEllipsis}</StyledButton>
        ) : (
          <StyledButton onClick={() => handleCtaClick()}>Connect</StyledButton>
        )}
      </div>
    </Nav>
  {children}
  </>
  )
}

export default Menu
