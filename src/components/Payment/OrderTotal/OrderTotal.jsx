import React from 'react';
import { PriceWrapper, Between, Texture } from './OrderTotal.style';

const OrderTotal = ({ mode, order }) => {
  return (
    <PriceWrapper>
      <Between>
        <Texture>商品金額</Texture>
        <Texture>{order.amount - 60}</Texture>
      </Between>
      <Between>
        <Texture>運費</Texture>
        <Texture>60</Texture>
      </Between>
      <Between>
        <Texture color={mode === 'order' ? '#333333' : '#72665A'} mode={mode}>總金額</Texture>
        <Texture fz='20' color={mode === 'order' ? '#333333' : '#72665A'} mode={mode}>NT${order.amount}</Texture>
      </Between>
    </PriceWrapper>
  )
}

export default OrderTotal;