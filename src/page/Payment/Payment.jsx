
import React, { useState } from 'react';
import { Wrapper, Left, Right, Flexer, LastStep } from './Payment.style';

import Step from '../../components/Payment/Step/Step';
import Card from '../../components/Payment/Card/Card';
import PayWay from '../../components/Payment/PayWay/PayWay';
import BaseButton from '../../components/BaseButton/BaseButton.jsx';
import ModalCoupon from '../../components/Payment/ModalCoupon/ModalCoupon';
import OrderInfo from '../../components/Payment/OrderInfo/OrderInfo';

import product from '../../assets/img/Products/img_3_003.png';
import product2 from '../../assets/img/Products/pic_product_1_2.png';

const Payment = () => {
  const products = [
    {
      id: 'bear',
      color: 'red',
      title: '小熊紙膠帶',
      price: 120,
      imgUrl: product,
    },
    {
      id: 'iphone',
      color: 'blue',
      title: 'like it!手機殼',
      price: 490,
      imgUrl: product2,
    },
  ];

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

  return (
    <Wrapper>
      <Step step={stage} />
      <Flexer>
        <Left>
          {
            stage === 'check' ? products.map(product => <Card key={product.id} product={product} />) : null
          }
          {
            stage === 'info' ? <OrderInfo /> : null
          }
        </Left>
        <Right>
          <PayWay coupon={() => setModal('coupon')} />
          <BaseButton color='brown-yellow' padding='12px 60px' mb='20' onClick={nextStage}>下一步</BaseButton>
          <LastStep onClick={lastStage}>{stage === 'info' ? '回上一步驟' : ''}</LastStep>
        </Right>
      </Flexer>
      <ModalCoupon show={modal === 'coupon'} use={() => closeModal()} close={() => closeModal()} />
    </Wrapper>
  )
}

export default Payment;