
import React from 'react';
import { Flex, Icon } from '../../../assets/css/global.style';
import { StepWrapper, Dropdown, DropdownItem, Group } from './Step.style';

import Cart from '../../../assets/img/Icon/Icon_cart_shoppingcart.svg';
import List from '../../../assets/img/Icon/Icon_cart_list.svg';
import Check from '../../../assets/img/Icon/Icon_cart_check.svg';

const Step = () => {
  return (
    <Flex>
      <Group>
        <StepWrapper isActive >
          <Icon src={Cart} width='34' height='44' />
        </StepWrapper>
        <Dropdown>
          <DropdownItem>確認商品並選擇付款方式</DropdownItem>
        </Dropdown>
      </Group>
      <Group>
        <StepWrapper>
          <Icon src={List} width='27' />
        </StepWrapper>
        <Dropdown left='-7%'>
          <DropdownItem>填寫收件資訊</DropdownItem>
        </Dropdown>
      </Group>
      <Group>
        <StepWrapper>
          <Icon src={Check} width='27' />
        </StepWrapper>
        <Dropdown left='1%'>
          <DropdownItem>購物完成</DropdownItem>
        </Dropdown>
      </Group>
    </Flex>
  )
}

export default Step;