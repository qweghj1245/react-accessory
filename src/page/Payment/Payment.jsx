
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Left, Right, Flexer } from './Payment.style';
import { Flex, BaseWrapper } from '../../assets/css/global.style';
import Step from '../../components/Payment/Step/Step';
import Card from '../../components/Payment/Card/Card';
import PayWay from '../../components/Payment/PayWay/PayWay';
import ModalCoupon from '../../components/Payment/ModalCoupon/ModalCoupon';
import OrderInfo from '../../components/Payment/OrderInfo/OrderInfo';
import OrderDone from '../../components/Payment/OrderDone/OrderDone';
import CheckoutInfo from '../../components/Payment/CheckoutInfo/CheckoutInfo';
import { getCartStart, updateCart } from '../../redux/cart/cart.action';
import { selectLoginUser } from '../../redux/user/user.selector';
import { selectComputeCart } from '../../redux/cart/cart.selector';
import { Skeleton } from '@material-ui/lab';
const Payment = () => {
  const dispatch = useDispatch();
  const computeCart = useSelector(selectComputeCart);
  const user = useSelector(selectLoginUser);
  const orderInfoState = useSelector(state => state.cart.orderInfoState);
  const [stage, setStage] = useState({
    status: 'check', // check、info、done
    country: null,
    pay: null,
    transport: null,
    contactPerson: '',
    contactPhoneNumber: '',
    recipientPerson: '',
    recipientPhoneNumber: '',
    recipientPostalCode: '',
    recipientCounty: '',
    recipientArea: '',
    recipientAddress: '',
  });
  const [modal, setModal] = useState('');

  const computeTotalAmount = () => {
    if (!computeCart) return 0;
    return computeCart.reduce((acc, item) => {
      acc = acc + (item.price * item.purchaseQuantity);
      return acc;
    }, 0);
  };
  const updateCartProduct = (update) => {
    const newCart = computeCart.map(product => {
      if (product.productId === update.id) {
        product.purchaseQuantity = update.quantity;
      }
      return product;
    });
    dispatch(updateCart(newCart));
  }

  const closeModal = () => {
    setModal('');
  };
  const nextStage = (payConfig) => {
    if (stage.status === 'check') {
      setStage({
        ...payConfig,
        status: 'info',
      });
    } else if (stage.status === 'info') {
      setStage({
        ...stage,
        ...orderInfoState,
      })
      // setStage('done');
    }
  };
  const lastStage = () => {
    switch (stage.status) {
      case 'done':
        setStage({
          ...stage,
          status: 'info',
        });
        break;
      case 'info':
        setStage({
          ...stage,
          status: 'check',
        });
        break;
      case 'check':
        return;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getCartStart());
  }, [dispatch]);

  return (
    <Wrapper>
      <Step step={stage.status} />
      <Flexer>
        <Left>
          {
            stage.status === 'check' && user && computeCart ?
              computeCart.map(product =>
                <Card key={product.id} product={product} user={user} resetList={updateCartProduct} />) :
              stage.status  === 'check' ?
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
                </BaseWrapper> : null
          }
          {
            stage.status  === 'info' ? <OrderInfo /> : null
          }
          {
            stage.status  === 'done' ? <OrderDone /> : null
          }
        </Left>
        <Right>
          {
            stage !== 'done' ?
              <PayWay
                coupon={() => setModal('coupon')}
                nextStage={nextStage}
                lastStage={lastStage}
                stage={stage.status}
                amount={computeTotalAmount()} />
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