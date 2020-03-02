import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper';
import { NoOrder } from './Order.style';
import { ImageWrapper } from '../../assets/css/global.style';
import BaseTable from '../../components/Order/BaseTable/BaseTable';
import noOrder from '../../assets/img/Order/pic_order_non.svg';
import { getOrdersStart } from '../../redux/order/order.action';
import { selectOrders } from '../../redux/order/order.selector';
const tHead = ['訂單編號', '訂單日期', '訂單金額', '訂單狀態'];

const Order = () => {
  const dispatch = useDispatch();
  const order = useSelector(selectOrders);
  useEffect(() => {
    dispatch(getOrdersStart());
  }, [dispatch]);

  return (
    <React.Fragment>
      {
        !order.length ?
          <NoOrder>
            <ImageWrapper src={noOrder} width='356' />
          </NoOrder> :
          <BaseTable tHead={tHead} tBody={order} />
      }
    </React.Fragment>
  )
}

export default BaseWrapper(Order);