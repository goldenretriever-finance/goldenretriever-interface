import React, {useContext} from 'react'
import styled from 'styled-components'
import {LanguageContext} from "../../hooks/LanguageContext"
import { allLanguages } from '../../constants/localisation/languageCodes'
import useGetPriceData from '../../hooks/useGetPriceData'
import { CAKE } from '../../constants'

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

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 20px;
    margin-right: 8px;
  }
  p {
    font-weight: bold;
    font-size: 14px;
  }
`
const LanguageListModal = styled.div`
  width: 210px;
  height: 8em;
  overflow: scroll;
  background-color: #fff;
  position: absolute;
  bottom: 30px;
  display: none;
  &:hover {
    display: block;
  }
`

const LanguageSetting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 32px;
  &:hover {
    ${LanguageListModal} {
      display: block;
    }
  }
  p {
    color: #7a6eaa;
    cursor: pointer;
    min-width: 120px;
  }
`
const StyledButton = styled.button`
  width: 100%;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  color: #7a6eaa;
  list-style: none;
  text-align: center;
  font-weight: bold;
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
const TwitterLink = styled.a`
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    height: 13px;
  }
`

const Footer = () => {
  const { translatedLanguage, setTranslatedLanguage } = useContext(LanguageContext)
  const priceData = useGetPriceData()
  const cakePriceUsd = priceData ? Number(priceData.data[CAKE.address].price) : undefined
  const openTelegram = (): void => {
    // eslint-disable-next-line no-console
    console.log('国を選択するポップアップ作成→telegramに遷移処理追加')
  }

  return (
    <StyledFooter>
      <PriceWrapper>
        <img src="/images/footer_dog_icon.png" alt="Goldenretriever" />
        <p>${cakePriceUsd}</p>
      </PriceWrapper>
      <LanguageSetting>
        {/* FIXME 言語アイコン切り出せるようになったら追加 */}
        <p>{translatedLanguage.language}</p>
        <LanguageListModal>
          {allLanguages.map((language) => (
            <StyledButton onClick={() => setTranslatedLanguage(language)}>{language.language}</StyledButton>
          ))}
        </LanguageListModal>
      </LanguageSetting>
      <SocialWrapper>
        <TelegramButton onClick={() => openTelegram()}>
          <img src="/images/footer_telegram.png" alt="telegram" />
        </TelegramButton>
        <TwitterLink href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src="/images/footer_twitter.png" alt="telegram" />
        </TwitterLink>
      </SocialWrapper>
    </StyledFooter>
  )
}

export default Footer
