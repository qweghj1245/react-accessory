import React from 'react';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import ProductsContent from '../../components/Products/Products';

const ProductsHoc = BaseWrapper(ProductsContent);

const Products = (props) => {
  return <ProductsHoc {...props} />
}

export default Products;