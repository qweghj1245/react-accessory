import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import { Wrapper, ProductsWrapper } from './Products.style';
import Card from '../../components/Card/Card';
import GoTopButton from '../../components/GoTopButton/GoTopButton';

import { getProductsStart } from '../../redux/product/product.action';
import { selectProducts } from '../../redux/product/product.selector';
const Products = ({ history }) => {
  const dispatch = useDispatch();
  const products =  useSelector(selectProducts);
  const isLoading =  useSelector(state => state.product.isLoading);

  useEffect(() => {
    dispatch(getProductsStart());
  }, [dispatch]);

  return (
    <Wrapper>
      <ProductsWrapper>
        {
          products
            .filter(product => product.classification!=='home')
            .map(product => 
              <Card key={product._id} item={product} isLoading={isLoading} goProduct={() => history.push('/product/sss')}/>)
        }
      </ProductsWrapper>
      <GoTopButton right={-13.2}/>
    </Wrapper>
  );
}

export default BaseWrapper(Products);