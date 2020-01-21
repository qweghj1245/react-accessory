import React, { useState, useEffect } from 'react';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import { Wrapper, ProductsWrapper, Pagination, Page } from './Products.style';
import Card from '../../components/Card/Card';
import GoTopButton from '../../components/GoTopButton/GoTopButton';

import product1 from '../../assets/img/Base/pic_product_10.png';
import product2 from '../../assets/img/Base/pic_product_7.png';
import product3 from '../../assets/img/Base/pic_product_14.png';
let timer;
const Products = ({ history }) => {
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

  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return (() => { //unmount
      clearTimeout(timer);
    })
  }, []);

  return (
    <Wrapper>
      <ProductsWrapper>
        {
          products.map(product => <Card key={product.title} item={product} isLoading={isLoading} goProduct={() => history.push('/product/sss')}/>)
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

export default BaseWrapper(Products);