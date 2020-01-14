
import React from 'react';
import { Wrapper, Left, Right, Flexer } from './Payment.style';

import Step from '../../components/Payment/Step/Step';
import Card from '../../components/Payment/Card/Card';
import PayWay from '../../components/Payment/PayWay/PayWay';
import BaseButton from '../../components/BaseButton/BaseButton.jsx';

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
  return (
    <Wrapper>
      <Step />
      <Flexer>
        <Left>
          {
            products.map(product => <Card key={product.id} product={product} />)
          }
        </Left>
        <Right>
          <PayWay />
          <BaseButton color='brown-yellow' padding='12px 60px'>下一步</BaseButton>
        </Right>
      </Flexer>
    </Wrapper>
  )
}

export default Payment;