import React from 'react';
import OrderSlider from '../OrderSlider/OrderSlider';
import OrderTotal from '../OrderTotal/OrderTotal';

const OrderDone = ({ mode='order' }) => {
  return (
    <React.Fragment>
      <OrderSlider>
        <OrderTotal mode={mode}/>
      </OrderSlider>
    </React.Fragment>
  )
};

export default OrderDone;