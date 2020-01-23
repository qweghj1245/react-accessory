import React from 'react';

import { ImageWrapper, Icon } from '../../../assets/css/global.style';
import { Wrapper, Texture } from './Card.style';

import cart from '../../../assets/img/Icon/icon_heart_cart.svg';
import trash from '../../../assets/img/Icon/Icon_heart_trash.svg';

const Card = ({ item }) => {
  return (
    <Wrapper>
      <ImageWrapper src={item.imgUrl} width='120' />
      <Texture>{item.name}</Texture>
      <Texture>NT${item.price}</Texture>
      <Icon src={cart} width='25' />
      <Icon src={trash} width='18' />
    </Wrapper>
  )
};

export default Card;