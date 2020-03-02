import React from 'react';
import { useSelector } from 'react-redux';
import OrderDone from '../../components/Payment/OrderDone/OrderDone';
import BaseWrappered from '../../components/BaseWrapper/BaseWrapper';
import OrderInfo from '../../components/OrderId/OrderInfo/OrderInfo';
import { Flexs, Texture } from './OrderId.style';

import { BaseWrapper } from '../../assets/css/global.style';

const OrderId = ({ history }) => {
  const order = useSelector(state => state.order.singleOrder);
  return (
    <Flexs>
      <BaseWrapper>
        <OrderDone mode='orderId' />
      </BaseWrapper>
      <BaseWrapper>
        {
          order ?
            <React.Fragment>
              <OrderInfo order={order} />
              <Texture onClick={() => history.push('/order')}>回到我的訂單</Texture>
            </React.Fragment>
            : null
        }
      </BaseWrapper>
    </Flexs>
  )
}

export default BaseWrappered(OrderId, 'order');