import React from 'react';

import PositionText from '../../../components/BackStage/PositionText/PositionText';
import Search from '../../../components/BackStage/Search/Search';
import Pagination from '../../../components/BackStage/Pagination/Pagination';
import BaseTable from '../../../components/BackStage/Order/BaseTable/BaseTable';
import BaseButton from '../../../components/BaseButton/BaseButton';
import { Wrapper, Select, TopTexture } from './Order.style';
import { Flex } from '../../../assets/css/global.style';

const test = [
  {
    label: '1',
    value: '1',
  },
];

const Order = () => {
  return (
    <Wrapper>
      <PositionText title='訂單' />
      <Flex justify='between' mt='11' mb='19'>
        <Flex justify='start'>
          <BaseButton mr='10' fz='14' padding='6px 12px' color='grey'>全部訂單</BaseButton>
          <BaseButton mr='10' fz='14' padding='6px 12px' color='grey'>處理中</BaseButton>
          <BaseButton mr='10' fz='14' padding='6px 12px' color='grey'>未付款</BaseButton>
          <BaseButton mr='20' fz='14' padding='6px 12px' color='grey'>備貨中</BaseButton>
          <Select triangle placeholder='批次變更訂單' options={test} width='112px' height='28px' border='#999999' />
        </Flex>
        <Flex justify='start'>
          <Search width='250' mr='20' />
          <Flex>
            <TopTexture mr='5'>顯示</TopTexture>
            <Select triangle placeholder='25' options={test} width='60px' height='28px' border='#999999' margin='0 5px' />
            <TopTexture ml='5'>筆</TopTexture>
          </Flex>
        </Flex>
      </Flex>
      <BaseTable />
      <Pagination />
    </Wrapper>
  )
}

export default Order;