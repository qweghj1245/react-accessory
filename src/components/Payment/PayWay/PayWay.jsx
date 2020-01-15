import React from 'react';

import { Wrapper, Texture, SubText, Between, UseCoupon, TextGroup, TextBetween } from './PayWay.style';
import BaseSelect from '../../BaseSelect/BaseSelect';

const country = [
  {
    label: '台灣',
    value: 'TW',
  }
]
const pay = [
  {
    label: '信用卡',
    value: 'creditCard',
  }
]
const transport = [
  {
    label: '宅配',
    value: 'Fedex',
  }
]
const Payment = ({ coupon }) => {
  return (
    <Wrapper>
      <Texture>選擇付款方式</Texture>
      <Between>
        <SubText mr color='greyLight'>折扣碼</SubText>
        <UseCoupon onClick={coupon}>使用折扣碼</UseCoupon>
      </Between>
      <BaseSelect triangle placeholder='配送國家' options={country} width='206px' height='40px' border='#999999' mb='15' />
      <BaseSelect triangle placeholder='付款方式' options={pay} width='206px' height='40px' border='#999999' mb='15' />
      <BaseSelect triangle placeholder='付款方式' options={transport} width='206px' height='40px' border='#999999' mb='15' />
      <TextGroup>
        <TextBetween>
          <SubText color='greyDark'>商品金額</SubText>
          <SubText color='greyDark'>610</SubText>
        </TextBetween>
        <TextBetween mb>
          <SubText color='greyDark'>運費</SubText>
          <SubText color='greyDark'>60</SubText>
        </TextBetween>
        <TextBetween>
          <SubText color='greyDark'>總金額</SubText>
          <SubText color='greyDark' fz='20'>NT$670</SubText>
        </TextBetween>
      </TextGroup>
    </Wrapper>
  )
}

export default Payment;