import React from 'react';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper';

import { NoOrder } from './Order.style';
import { ImageWrapper } from '../../assets/css/global.style';

import order from '../../assets/img/Order/pic_order_non.svg';

const Order = () => {
  return (
    <React.Fragment>
      <NoOrder>
        <ImageWrapper src={order} width='356' />
      </NoOrder>
    </React.Fragment>
  )
}

export default BaseWrapper(Order);