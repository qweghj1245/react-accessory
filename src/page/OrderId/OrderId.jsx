import React from 'react';
import { useSelector } from 'react-redux';
import OrderDone from '../../components/Payment/OrderDone/OrderDone';
import BaseWrappered from '../../components/BaseWrapper/BaseWrapper';
import OrderInfo from '../../components/OrderId/OrderInfo/OrderInfo';
import { Flexs, Texture, Wrapper } from './OrderId.style';

const OrderId = ({ history }) => {
  const order = useSelector(state => state.order.singleOrder);
  return (
    <Flexs>
      <Wrapper mb='16'>
        <OrderDone mode='orderId' />
      </Wrapper>
      <Wrapper>
        {
          order ?
            <React.Fragment>
              <OrderInfo order={order} />
              <Texture onClick={() => history.push('/order')}>回到我的訂單</Texture>
            </React.Fragment>
            : null
        }
      </Wrapper>
    </Flexs>
  )
}

export default BaseWrappered(OrderId, 'order');