import React from 'react'
import {Modal} from '@pancakeswap-libs/uikit'
import styled from "styled-components";
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import AudioSetting from './AudioSetting'

type SettingsModalProps = {
  onDismiss?: () => void
  translateString: (translationId: number, fallback: string) => string
}

const GRModal = styled(Modal)`
  border-radius: 6px;
  input {
    background-color: #eae1f8;
  }
  button > svg {
    fill: #CF00F0;
  }
  label[for="pancake-toggle"] {
    background-color: #CF00F0;
  }
`

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss, translateString }: SettingsModalProps) => {
  return (
    <GRModal title={translateString(1200, 'Settings')} onDismiss={onDismiss}>
      <SlippageToleranceSetting translateString={translateString} />
      <TransactionDeadlineSetting translateString={translateString} />
      <AudioSetting translateString={translateString} />
    </GRModal>
  )
}

export default SettingsModal
