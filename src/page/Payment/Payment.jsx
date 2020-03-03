import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { Wrapper, Left, Right, Flexer } from './Payment.style';
import { ImageWrapper } from '../../assets/css/global.style';
import Step from '../../components/Payment/Step/Step';
import Card from '../../components/Payment/Card/Card';
import PayWay from '../../components/Payment/PayWay/PayWay';
import ModalCoupon from '../../components/Payment/ModalCoupon/ModalCoupon';
import OrderInfo from '../../components/Payment/OrderInfo/OrderInfo';
import OrderDone from '../../components/Payment/OrderDone/OrderDone';
import CheckoutInfo from '../../components/Payment/CheckoutInfo/CheckoutInfo';
import { getCartStart, updateCart } from '../../redux/cart/cart.action';
import { createOrderStart, patchOrderStart } from '../../redux/order/order.action';
import { selectLoginUser } from '../../redux/user/user.selector';
import { selectComputeCart, selectCarts } from '../../redux/cart/cart.selector';
import { loadStripe } from '@stripe/stripe-js';
import queryString from 'query-string';
import noData from '../../assets/img/Cart/img_cart.png';
const Payment = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const computeCart = useSelector(selectComputeCart);
  const cart = useSelector(selectCarts);
  const isLoading = useSelector(state => state.cart.isLoading);
  const order = useSelector(state => state.order.order);
  const user = useSelector(selectLoginUser);
  const orderInfoState = useSelector(state => state.cart.orderInfoState);
  const coupon = useSelector(state => state.cart.coupon);
  const [stage, setStage] = useState({
    status: 'check', // check、info、wait、done
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
    products: null,
    cart: '',
    amount: '',
  });
  const [modal, setModal] = useState('');

  /* 商品相關 */
  const computeTotalAmount = useMemo(() => {
    if (!computeCart) return 0;
    let total = computeCart.reduce((acc, item) => {
      acc = acc + (item.price * item.purchaseQuantity);
      return acc;
    }, 0);

    if (coupon) {
      return Math.round(total * (coupon.discount / 100));
    }
    return total;
  }, [computeCart, coupon]);
  const updateCartProduct = (update) => {
    const newCart = computeCart.map(product => {
      if (product.productId === update.id) {
        product.purchaseQuantity = update.quantity;
      }
      return product;
    });
    dispatch(updateCart(newCart));
  }

  /* 頁面操作 */
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
        status: 'wait',
        contactPerson: user.name,
        contactPhoneNumber: user.phoneNumber,
        products: computeCart,
        amount: computeTotalAmount + 60,
        cart: cart._id,
      });
      alert.info('產生訂單中...');
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

  /* order相關 */
  const redirectPage = useCallback(async () => {
    if (order) {
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
      stripe.redirectToCheckout({
        sessionId: order.order.sessionId,
      });
    }
  }, [order]);

  useEffect(() => {
    redirectPage();
  }, [redirectPage]);
  useEffect(() => {
    if (stage.status === 'wait') {
      dispatch(createOrderStart({
        ...stage,
        successUrl: `${window.location.protocol}//${window.location.host}/payment`,
        cancelUrl: `${window.location.protocol}//${window.location.host}/payment`,
      }));
    }
  }, [stage, dispatch]);
  useEffect(() => {
    let params = queryString.parse(history.location.search);
    if (params && params.status === 'done') {
      setStage(s => ({
        ...s,
        status: 'done',
      }));
      dispatch(patchOrderStart({
        payStatus: 'isPay',
        orderStatus: 'handling',
        delivery: 'inStock',
        id: history.location.pathname.split('/')[2],
      }));
    } else {
      dispatch(getCartStart());
    }
  }, [dispatch, history]);

  return (
    <Wrapper>
      <Step step={stage.status} />
      <Flexer noData={cart && cart.products.length === 0}>
        <Left noData={cart && cart.products.length === 0}>
          {
            stage.status === 'check' && user && computeCart && computeCart.length && !isLoading ?
              computeCart.map(product =>
                <Card key={product.id} product={product} user={user} resetList={updateCartProduct} />) :
                <ImageWrapper
                  src={noData}
                  style={{ cursor: 'pointer' }}
                  display={stage.status === 'check' ? 'block' : 'none'}
                  onClick={() => history.push('/products')} />
          }
          {
            stage.status === 'info' || stage.status === 'wait' ? <OrderInfo /> : null
          }
          {
            stage.status === 'done' ? <OrderDone /> : null
          }
        </Left>
        <Right noData={(cart && cart.products.length === 0)||!cart}>
          {
            stage.status !== 'done' && cart && cart.products.length ?
              <PayWay
                coupon={() => setModal('coupon')}
                nextStage={nextStage}
                lastStage={lastStage}
                stage={stage.status}
                amount={computeTotalAmount} />
              :
              stage.status === 'done' ?
                <CheckoutInfo /> : null
          }
        </Right>
      </Flexer>
      <ModalCoupon show={modal === 'coupon'} use={() => closeModal()} close={() => closeModal()} />
    </Wrapper>
  )
}

export default Payment;