import React, { useState } from 'react';

import PositionText from '../../../components/BackStage/PositionText/PositionText';
import ProductInfo from '../../../components/BackStage/ProductsAdd/ProductInfo/ProductInfo';
import { Wrapper, TabWrapper, Tab, TabLong } from './ProductsAdd.style';

const ProductsAdd = () => {
  const [tabStatus, setTabStatus] = useState('info'); 
  return (
    <Wrapper>
      <PositionText title='商品' id='新增商品' />
      <TabWrapper>
        <Tab active={tabStatus==='info'} onClick={() => setTabStatus('info')}>商品資訊</Tab>
        <TabLong active={tabStatus==='standard'} justify='start' onClick={() => setTabStatus('standard')}>商品規格</TabLong>
      </TabWrapper>
      <ProductInfo />
    </Wrapper>
  )
}

export default ProductsAdd;