
import React from 'react';
import { Flex, Icon } from '../../../assets/css/global.style';
import { StepWrapper, Dropdown, DropdownItem, Group } from './Step.style';

import daCart from '../../../assets/img/Icon/Icon_cart_shoppingcart.svg';
import daList from '../../../assets/img/Icon/Icon_cart_list.svg';
import daCheck from '../../../assets/img/Icon/Icon_cart_check.svg';

import aList from '../../../assets/img/Icon/Icon_cart_list2.svg';
import aCheck from '../../../assets/img/Icon/Icon_cart_check2.svg';

const Step = ({ step }) => {
  return (
    <Flex>
      <Group>
        <StepWrapper isActive={step === 'check' || step === 'info' || step === 'done'} >
          <Icon src={daCart} width='34' height='44' />
        </StepWrapper>
        <Dropdown>
          <DropdownItem>確認商品並選擇付款方式</DropdownItem>
        </Dropdown>
      </Group>
      <Group>
        <StepWrapper isActive={step === 'info' || step === 'done'}>
          <Icon src={step === 'info' || step === 'done' ? aList : daList} width='27' />
        </StepWrapper>
        <Dropdown left='-7%'>
          <DropdownItem>填寫收件資訊</DropdownItem>
        </Dropdown>
      </Group>
      <Group>
        <StepWrapper mr='0' isActive={step === 'done'}>
          <Icon src={step === 'done' ? aCheck : daCheck} width='27' />
        </StepWrapper>
        <Dropdown left='1%'>
          <DropdownItem>購物完成</DropdownItem>
        </Dropdown>
      </Group>
    </Flex>
  )
}

export default Step;