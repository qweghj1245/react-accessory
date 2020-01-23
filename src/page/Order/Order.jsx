import React from 'react';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper';

import { NoOrder } from './Order.style';
import { ImageWrapper } from '../../assets/css/global.style';
import BaseTable from '../../components/Order/BaseTable/BaseTable';

import order from '../../assets/img/Order/pic_order_non.svg';

const tHead = ['訂單編號', '訂單日期', '訂單金額', '訂單狀態'];
const tBody = [
  {
    id: 'ahsuidhasuiod',
    createdAt: 1579780804242,
    price: 123,
    status: '已付款',
  },
  {
    id: 'aasdhhc',
    createdAt: 1579780904242,
    price: 456,
    status: '未付款',
  },
];

const Order = () => {
  return (
    <React.Fragment>
      {
        !tBody.length ?
          <NoOrder>
            <ImageWrapper src={order} width='356' />
          </NoOrder> :
          <BaseTable tHead={tHead} tBody={tBody} />
      }
    </React.Fragment>
  )
}

export default BaseWrapper(Order);