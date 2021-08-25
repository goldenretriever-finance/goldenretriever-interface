import React from 'react'
import { Button, ButtonProps, useWalletModal} from '@pancakeswap-libs/uikit'
import styled from "styled-components";
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'

const Wrapper = styled.div`
  background: linear-gradient( 94.17deg ,#0947e7 0%,#cf00f0 73.96%);
  padding: 2px;
  border-radius: 6px;
  button {
    height: 46px;
    color: white;
    font-size: 13px;
    background: #000000;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 6px;
    border: 2px;
    border-image-slice: 1;
    border-image: linear-gradient(94.17deg, #0947e7 0%, #cf00f0 73.96%);
  }
`

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Wrapper>
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
    </Wrapper>
  )
}

export default UnlockButton
