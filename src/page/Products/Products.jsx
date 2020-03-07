import React, { useEffect, useCallback } from 'react';
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
  const filterType =  useSelector(state => state.product.filterType);

  const filterProducts = () => {
    return filterType ? products.filter(item => item.classification === filterType) : products;
  };

  const sameFilterType = useCallback(() => filterType, [filterType]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sameFilterType()) {
      dispatch(getProductsStart());
    }
  }, [dispatch, sameFilterType]);

  return (
    <Wrapper>
      <ProductsWrapper>
        {
          filterProducts()
            .filter(product => product.classification!=='home')
            .map(product => 
              <Card key={product._id} item={product} isLoading={isLoading} goProduct={() => history.push(`/product/${product._id}`)}/>)
        }
      </ProductsWrapper>
      <GoTopButton />
    </Wrapper>
  );
}

export default BaseWrapper(Products);