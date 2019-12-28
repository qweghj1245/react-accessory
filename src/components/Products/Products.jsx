import React, { useState } from 'react';
import { Wrapper, ProductsWrapper, Pagination, Page } from './Products.style';
import Card from '../Card/Card';
import GoTopButton from '../GoTopButton/GoTopButton';

import product1 from '../../assets/img/Base/pic_product_10.png';
import product2 from '../../assets/img/Base/pic_product_7.png';
import product3 from '../../assets/img/Base/pic_product_14.png';

const Products = () => {
  const [products] = useState([
    {
      image: product1,
      title: '黑白動物2020年曆',
      price: 450,
    },
    {
      image: product2,
      title: '戲水假期透明手機殼',
      price: 490,
    },
    {
      image: product3,
      title: 'like it!掛報',
      price: 350,
    },
    {
      image: product3,
      title: 'test',
      price: 3450,
    },
  ])
  return (
    <Wrapper>
      <ProductsWrapper>
        {
          products.map(product => <Card key={product.title} item={product} />)
        }

      </ProductsWrapper>
      <Pagination>
        {
          [1, 2, 3].map(item => item === 1 ? <Page key={item} isActive>{item}</Page> : <Page key={item}>{item}</Page>)
        }
      </Pagination>
      <GoTopButton right={-13.2}/>
    </Wrapper>
  );
}

export default Products;