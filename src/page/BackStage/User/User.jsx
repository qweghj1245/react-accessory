import React from 'react';

import PositionText from '../../../components/BackStage/PositionText/PositionText';
import { Wrapper, TotalPeople, Texture, TopTexture, Select } from './User.style';
import { Flex, Icon } from '../../../assets/css/global.style';
import Search from '../../../components/BackStage/Search/Search';
import BaseTable from '../../../components/BackStage/User/BaseTable';
import Pagination from '../../../components/BackStage/Pagination/Pagination';

import people from '../../../assets/img/Backstage/Icon awesome-users.svg';

const test = [
  {
    label: '1',
    value: '1',
  },
];

const User = () => {
  return (
    <Wrapper>
      <PositionText title='會員' />
      <Flex justify='between' mt='20'>
        <Flex justify='start'>
          <TotalPeople>
            <Icon src={people} width='12' />
            <Texture>10</Texture>
          </TotalPeople>
          <Search width='120' placeholder='搜尋' right='10' ml='30' />
        </Flex>
        <Flex>
          <TopTexture mr='5'>顯示</TopTexture>
          <Select triangle placeholder='25' options={test} width='60px' height='28px' border='#999999' margin='0 5px' />
          <TopTexture ml='5'>筆</TopTexture>
        </Flex>
      </Flex>
      <BaseTable />
      <Pagination />
    </Wrapper>
  )
}

export default User;