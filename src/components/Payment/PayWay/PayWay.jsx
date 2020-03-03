import React, { useRef } from 'react';
import { useAlert } from 'react-alert';
import BaseButton from '../../BaseButton/BaseButton.jsx';
import { Wrapper, Texture, SubText, Between, UseCoupon, TextGroup, TextBetween, LastStep } from './PayWay.style';
import BaseSelect from '../../BaseSelect/BaseSelect';

const country = [
  {
    label: '台灣',
    value: 'Taiwan',
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

const Payment = ({ coupon, nextStage, lastStage, stage, amount }) => {
  const alert = useAlert();
  const countryModel = useRef(null);
  const payModel = useRef(null);
  const transportModel = useRef(null);

  const sendInfo = () => {
    if (!countryModel.current) return alert.error('請選擇配送國家');
    if (!payModel.current) return alert.error('請選擇付款方式');
    if (!transportModel.current) return alert.error('請選擇運送方式');
    nextStage({
      country: countryModel.current,
      payment: payModel.current,
      transport: transportModel.current,
    });
  }

  return (
    <React.Fragment>
      <Wrapper>
        <Texture>選擇付款方式</Texture>
        <Between>
          <SubText mr color='greyLight'>折扣碼</SubText>
          <UseCoupon onClick={coupon}>使用折扣碼</UseCoupon>
        </Between>
        <BaseSelect
          triangle
          placeholder='配送國家'
          options={country}
          changeVal={cty => countryModel.current = cty}
          width='206px'
          height='40px'
          dropHeight='auto'
          border='#999999'
          mb='15' />
        <BaseSelect
          triangle
          placeholder='付款方式'
          options={pay}
          changeVal={cty => payModel.current = cty}
          width='206px'
          height='40px'
          dropHeight='auto'
          border='#999999'
          mb='15' />
        <BaseSelect
          triangle
          placeholder='運送方式'
          options={transport}
          changeVal={cty => transportModel.current = cty}
          width='206px'
          height='40px'
          dropHeight='auto'
          border='#999999'
          mb='15' />
        <TextGroup>
          <TextBetween>
            <SubText color='greyDark'>商品金額</SubText>
            <SubText color='greyDark'>{amount}</SubText>
          </TextBetween>
          <TextBetween mb>
            <SubText color='greyDark'>運費</SubText>
            <SubText color='greyDark'>60</SubText>
          </TextBetween>
          <TextBetween>
            <SubText color='greyDark'>總金額</SubText>
            <SubText color='greyDark' fz='20'>{amount > 0 ? `NT$${amount + 60}` : '計算中...'}</SubText>
          </TextBetween>
        </TextGroup>
      </Wrapper>
      <BaseButton color='brown-yellow' padding='12px 60px' mb='20' onClick={sendInfo}>下一步</BaseButton>
      <LastStep onClick={lastStage}>{stage === 'info' ? '回上一步驟' : ''}</LastStep>
    </React.Fragment>
  )
}

export default React.memo(Payment);