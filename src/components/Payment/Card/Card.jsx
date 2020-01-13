import React from 'react';

import BaseSelect from '../../BaseSelect/BaseSelect';

import { Wrapper, Flexer, Color, Texture, FlexBetween } from './Card.style';
import { ImageWrapper, Icon, Flex } from '../../../assets/css/global.style';

import heart from '../../../assets/img/Icon/Icon_cart_heartempty_small.svg';
import trash from '../../../assets/img/Icon/Icon_heart_trash.svg';

const Payment = ({ product }) => {
  const numbers = [
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },
    {
      label: 4,
      value: 4,
    },
  ]
  return (
    <Wrapper>
      <Flex>
        <ImageWrapper src={product.imgUrl} width='120' />
        <Flexer>
          <Color color='red' />
          <Texture mb='30'>{product.title}</Texture>
          <Texture>{`NT$${product.price}`}</Texture>
        </Flexer>
      </Flex>
      <Flexer>
        <BaseSelect triangle placeholder='1' options={numbers} width='60px' height='28px' border='#999999' />
        <FlexBetween>
          <Icon src={heart} width='21' />
          <Icon src={trash} width='18' />
        </FlexBetween>
      </Flexer>
    </Wrapper>
  )
}

export default Payment;