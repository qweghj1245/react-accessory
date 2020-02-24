
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Left, Right, Flexer, LastStep } from './Payment.style';
import { Flex, BaseWrapper } from '../../assets/css/global.style';
import Step from '../../components/Payment/Step/Step';
import Card from '../../components/Payment/Card/Card';
import PayWay from '../../components/Payment/PayWay/PayWay';
import BaseButton from '../../components/BaseButton/BaseButton.jsx';
import ModalCoupon from '../../components/Payment/ModalCoupon/ModalCoupon';
import OrderInfo from '../../components/Payment/OrderInfo/OrderInfo';
import OrderDone from '../../components/Payment/OrderDone/OrderDone';
import CheckoutInfo from '../../components/Payment/CheckoutInfo/CheckoutInfo';
import { getCartStart } from '../../redux/cart/cart.action';
import { selectLoginUser } from '../../redux/user/user.selector';
import { selectCarts } from '../../redux/cart/cart.selector';
import { Skeleton } from '@material-ui/lab';
const Payment = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCarts);
  const user = useSelector(selectLoginUser);
  const computeCart = () => {
    if (!cart) return [];
    return cart.products.reduce((acc, item) => {
      acc.push({
        ...item.product,
        id: item._id,
        productId: item.product._id,
        size: item.size,
        purchaseQuantity: item.purchaseQuantity,
        color: item.color,
      });
      return acc;
    }, []);
  };

  const [stage, setStage] = useState('check'); // check、info、done
  const [modal, setModal] = useState('');

  const closeModal = () => {
    setModal('');
  }
  const nextStage = () => {
    switch (stage) {
      case 'check':
        setStage('info');
        break;
      case 'info':
        setStage('done');
        break;
      default:
        break;
    }
  }
  const lastStage = () => {
    switch (stage) {
      case 'done':
        setStage('info');
        break;
      case 'info':
        setStage('check');
        break;
      case 'check':
        return;
      default:
        break;
    }
  }

  useEffect(() => {
    dispatch(getCartStart());
  }, [dispatch]);

  return (
    <Wrapper>
      <Step step={stage} />
      <Flexer>
        <Left>
          {
            stage === 'check' && user && cart ?
              computeCart().map(product => <Card key={product.id} product={product} user={user} />) :
              <BaseWrapper>
                <Flex align='center' justify='start' style={{ width: '545px' }} >
                  <Skeleton variant="rect" width={150} height={150} style={{ marginRight: '16px', marginTop: '16px' }} />
                  <div>
                    <Skeleton width={200} height={40} />
                    <Skeleton width={150} height={40} />
                    <Skeleton width={100} height={40} />
                  </div>
                </Flex>
                <Flex align='center' justify='start'>
                  <Skeleton variant="rect" width={150} height={150} style={{ marginRight: '16px', marginTop: '16px' }} />
                  <div>
                    <Skeleton width={200} height={40} />
                    <Skeleton width={150} height={40} />
                    <Skeleton width={100} height={40} />
                  </div>
                </Flex>
              </BaseWrapper>
          }
          {
            stage === 'info' ? <OrderInfo /> : null
          }
          {
            stage === 'done' ? <OrderDone /> : null
          }
        </Left>
        <Right>
          {
            stage !== 'done' ?
              <React.Fragment>
                <PayWay coupon={() => setModal('coupon')} />
                <BaseButton color='brown-yellow' padding='12px 60px' mb='20' onClick={nextStage}>下一步</BaseButton>
                <LastStep onClick={lastStage}>{stage === 'info' ? '回上一步驟' : ''}</LastStep>
              </React.Fragment>
              :
              <CheckoutInfo />
          }
        </Right>
      </Flexer>
      <ModalCoupon show={modal === 'coupon'} use={() => closeModal()} close={() => closeModal()} />
    </Wrapper>
  )
}

export default Payment;