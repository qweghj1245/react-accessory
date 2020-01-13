
import React from 'react';
import { Wrapper, Left } from './Payment.style';
import { Flex } from '../../assets/css/global.style';

import Step from '../../components/Payment/Step/Step';
import Card from '../../components/Payment/Card/Card';

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
      <Flex>
        <Left>
          {
            products.map(product => <Card product={product} />)
          }
        </Left>
      </Flex>
    </Wrapper>
  )
}

export default Payment;