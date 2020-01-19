import React from 'react';
import Card from '../../Card/Card';

import { Title, Wrapper, CardWrap } from './RecommendList.style';
import product from '../../../assets/img/Products/pic_product_8.png';
import product2 from '../../../assets/img/Products/pic_product_10.png';
import product3 from '../../../assets/img/Products/pic_product_13.png';
import product4 from '../../../assets/img/Products/pic_product_15.png';

const cardList = [
  {
    image: product,
    title: '黑白動物2020月曆',
    price: 450,
  },
  {
    image: product2,
    title: '黑色小熊透明手機殼',
    price: 490,    
  },
  {
    image: product3,
    title: '好朋友的陪伴掛報',
    price: 350,
  },
  {
    image: product4,
    title: '美好時光玻璃杯',
    price: 350,
  }
]

const RecommendList = () => {
  return (
    <Wrapper>
      <Title>推薦商品</Title>
      <CardWrap>
        {
          cardList.map(item => <Card item={item} height='142'/>)
        }
      </CardWrap>
    </Wrapper>
  )
}

export default RecommendList;