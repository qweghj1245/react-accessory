import React from 'react';
import OrderDone from '../../components/Payment/OrderDone/OrderDone';
import BaseWrappered from '../../components/BaseWrapper/BaseWrapper';
import OrderInfo from '../../components/OrderId/OrderInfo/OrderInfo';
import { Flexs, Texture } from './OrderId.style';

import { BaseWrapper } from '../../assets/css/global.style';

const OrderId = ({ history }) => {
  return (
    <Flexs>
      <BaseWrapper>
        <OrderDone mode='orderId' />
      </BaseWrapper>
      <BaseWrapper>
        <OrderInfo />
        <Texture onClick={() => history.push('/order')}>回到我的訂單</Texture>
      </BaseWrapper>
    </Flexs>
  )
}

export default BaseWrappered(OrderId, { id: '123123' });