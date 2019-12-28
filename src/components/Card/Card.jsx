import React from 'react';

import { CardWrapper, CardImage, CardTitle, CardPrice } from './Card.style';

const Card = (props) => {
  const { item } = props;
  return (
    <CardWrapper key={item.title}>
      <CardImage url={item.image}></CardImage>
      <CardTitle>{item.title}</CardTitle>
      <CardPrice>NT${item.price}</CardPrice>
    </CardWrapper>
  )
}

export default Card;