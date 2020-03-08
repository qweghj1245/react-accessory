import React from 'react';

import { ImageWrapper, Icon } from '../../../assets/css/global.style';
import { Wrapper, Texture } from './Card.style';

import cart from '../../../assets/img/Icon/icon_heart_cart.svg';
import trash from '../../../assets/img/Icon/Icon_heart_trash.svg';

const Card = ({ item, click, cancel }) => {

  const cancelCollect = (e) => {
    e.stopPropagation();
    cancel();
  }

  return (
    <Wrapper onClick={click}>
      <ImageWrapper src={item.photos[0]} width={window.innerWidth > 960 ? '120' : '80'} />
      <Texture>{item.name}</Texture>
      <Texture>NT${item.price}</Texture>
      <Icon src={cart} width='25' />
      <Icon src={trash} width='18' onClick={cancelCollect}/>
    </Wrapper>
  )
};

export default Card;