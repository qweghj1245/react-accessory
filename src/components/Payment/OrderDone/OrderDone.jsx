import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderSlider from '../OrderSlider/OrderSlider';
import OrderTotal from '../OrderTotal/OrderTotal';
import queryString from 'query-string';
import { getOrderStart } from '../../../redux/order/order.action';

const OrderDone = ({ mode = 'order', history }) => {
  const dispatch = useDispatch();
  const singleOrder = useSelector(state => state.order.singleOrder);

  useEffect(() => {
    let params = queryString.parse(history.location.search);
    if (params && params.status === 'done') {
      dispatch(getOrderStart(history.location.pathname.split('/')[2]));
    }
  }, [dispatch, history]);

  if (!singleOrder) return null;

  return (
    <React.Fragment>
      <OrderSlider products={singleOrder.products}>
        <OrderTotal mode={mode} order={singleOrder} />
      </OrderSlider>
    </React.Fragment>
  )
};

export default withRouter(OrderDone);