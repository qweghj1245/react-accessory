import React from 'react';
// import { useRouteMatch } from 'react-router-dom';
import { Breadcrumbs } from '@material-ui/core';

import { Wrapper, LinkHandle } from './ProductsWrapper.style';
import { Title } from '../../assets/css/global.style';

const Products = (props) => {
  console.log(props);
  const { config: { name, path, children } } = props;
  return (
    <Wrapper>
      <Breadcrumbs aria-label="breadcrumb" children={children}>
        <LinkHandle href="/">
          首頁
        </LinkHandle>
        <LinkHandle href={path}>{name}</LinkHandle>
      </Breadcrumbs>
      <Title mb={50}>全部商品</Title>
    </Wrapper>
  );
}

export default Products;