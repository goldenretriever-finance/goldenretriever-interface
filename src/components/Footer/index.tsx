import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  position: fixed;
  width: 100%;
  height: 48px;
  padding:0 22px 0;
  background-color: rgb(8 26 86 / 86%);
  bottom: 0;
  border-top: 1px solid #000000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const TelegramButton = styled.div`
  width: 26px;
  height: 26px;
  background: linear-gradient(211.74deg, #34b0df -4.14%, #1e88d3 90.25%);
  border-radius: 50%;
  padding: 5px 0 0 4px;
  margin-right: 17px;
  img {
    width: 14.93px;
    height: 12.26px;
  }
`
const SnsLink = styled.a`
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 17px;
  img {
    width: 16px;
    height: 13px;
  }
`

const Footer = () => {
  const openTelegram = (): void => {
    // eslint-disable-next-line no-console
    console.log('国を選択するポップアップ作成→telegramに遷移処理追加')
  }

  return (
    <StyledFooter>
      <SocialWrapper>
        <SnsLink href="https://t.me/joinchat/o98mgf0Nqdg5ZGZl" target="_blank" rel="noreferrer">
          <img src="/images/footer_telegram.png" alt="telegram" />
        </SnsLink>
        <SnsLink href="https://twitter.com/retrievercoin" target="_blank" rel="noreferrer">
          <img src="/images/footer_twitter.png" alt="twitter" />
        </SnsLink>
        <SnsLink href="https://line.me/ti/g2/X-HO6r5raOkKZwDSPv3lEg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank" rel="noreferrer">
          <img src="/images/footer_line.png" alt="line" />
        </SnsLink>
        <SnsLink href="https://open.kakao.com/o/g1c27qqd" target="_blank" rel="noreferrer">
          <img src="/images/footer_kakao.png" alt="kakao" />
        </SnsLink>
      </SocialWrapper>
    </StyledFooter>
  )
}

export default Footer
