import React from 'react';

import PositionText from '../../../components/BackStage/PositionText/PositionText';
import { Wrapper, Select, AddButton, Texture } from './Products.style';
import { Flex, BaseWrapper, Icon } from '../../../assets/css/global.style';
import Search from '../../../components/BackStage/Search/Search';
import BaseTable from '../../../components/BackStage/Products/BaseTable/BaseTable';

import IconAdd from '../../../assets/img/Backstage/Icon_feather-plus.svg';

const test = [
  {
    label: '1',
    value: '1',
  },
];
const Shop = () => {
  return (
    <Wrapper>
      <PositionText title='商品' />
      <Flex justify='between' mt='22'>
        <Flex justify='start'>
          <BaseWrapper mr='10'>
            <Select triangle placeholder='顯示所有商品' options={test} width='112px' height='28px' border='#999999' />
          </BaseWrapper>
          <BaseWrapper mr='10'>
            <Select triangle placeholder='批次變更商品' options={test} width='112px' height='28px' border='#999999' />
          </BaseWrapper>
          <AddButton>
            <Texture>新增</Texture>
            <Icon src={IconAdd} width='8' />
          </AddButton>
        </Flex>
        <Search width='144' placeholder='搜尋商品名稱' right='10' />
      </Flex>
      <BaseTable />
    </Wrapper>
  )
}

export default Shop;
