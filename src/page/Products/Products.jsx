import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import { Wrapper, ProductsWrapper } from './Products.style';
import Card from '../../components/Card/Card';
import GoTopButton from '../../components/GoTopButton/GoTopButton';

import { getProductsStart } from '../../redux/product/product.action';
import { selectProducts } from '../../redux/product/product.selector';
const Products = ({ history }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(state => state.product.isLoading);
  const filterType = useSelector(state => state.product.filterType);

  const filterProducts = () => {
    return filterType ? products.filter(item => item.classification === filterType) : products;
  };
  const sameFilterType = useCallback(() => filterType, [filterType]);

  /* 手機Card dom 操作 */
  const cardRef = React.createRef();
  const [cardHeight, setCardHeight] = useState(0);
  const setCardCb = useCallback(() => {
    setCardHeight(cardRef.current.offsetWidth);
  }, [cardRef]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sameFilterType()) {
      dispatch(getProductsStart());
    }
  }, [dispatch, sameFilterType]);

  useEffect(() => {
    if (window.innerWidth < 960 && cardRef && cardRef.current) {
      setCardCb();
    }
  }, [setCardCb, cardRef]);

  return (
    <Wrapper>
      <ProductsWrapper>
        {
          filterProducts()
            .filter(product => product.classification !== 'home')
            .map(product =>
              <Card
                ref={cardRef}
                height={window.innerWidth < 960 ? cardHeight : 304}
                key={product._id}
                item={product}
                isLoading={isLoading}
                goProduct={() => history.push(`/product/${product._id}`)} />)
        }
      </ProductsWrapper>
      <GoTopButton right='0' bottom='30%' direct='fixed' />
    </Wrapper>
  );
}

export default BaseWrapper(Products);