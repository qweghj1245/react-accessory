import React from 'react';

import PositionText from '../../../components/BackStage/PositionText/PositionText';
import { Wrapper } from './Order.style';

const Order = () => {
  return (
    <Wrapper>
      <PositionText title='訂單' />
    </Wrapper>
  )
}

export default Order;