import React from 'react';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import ProductContent from '../../components/Product/Product';

const ProductHoc = BaseWrapper(ProductContent);

const Product = (props) => {
  return <ProductHoc {...props} />
}

export default Product;