import React from 'react';
import Card from '../../components/Collection/Card/Card';

import BaseWrapper from '../../components/BaseWrapper/BaseWrapper';
import { Wrapper, Image } from './Collection.style';
import { Flex } from '../../assets/css/global.style';

import noCollection from '../../assets/img/Collection/pic_heart_non.svg';
import product from '../../assets/img/Products/pic_product_1_2.png';
import product2 from '../../assets/img/Products/pic_product_1_3.png';

const products = [
  {
    imgUrl: product,
    name: '小熊紙膠帶',
    price: 120,
  },
  {
    imgUrl: product2,
    name: 'like it!手機殼',
    price: 490,
  }
];

const Collection = () => {
  return (
    <Wrapper>

      {
        products.length ? 
        products.map(item => <Card item={item} />) :
          <Flex>
            <Image src={noCollection} width='356' />
          </Flex>
      }
    </Wrapper>
  )
};

export default BaseWrapper(Collection);