import React from 'react';
import { Skeleton } from '@material-ui/lab';

import { CardWrapper, CardImage, CardTitle, CardPrice } from './Card.style';

const Card = (props) => {
  const { item, isLoading, ...styles } = props;
  return (
    <div>
      {
        !isLoading ? (
          <CardWrapper onClick={props.goProduct}>
            <CardImage url={item.image} {...styles}></CardImage>
            <CardTitle>{item.title}</CardTitle>
            <CardPrice>NT${item.price}</CardPrice>
          </CardWrapper>) : (
            <CardWrapper>
              <Skeleton variant="rect" width={304} height={304} />
              <Skeleton width="60%" style={{ 'margin': '0 auto' }} height={20} />
              <Skeleton width="60%" style={{ 'margin': '0 auto' }} height={20} />
            </CardWrapper>)
      }
    </div>

  )
}

export default Card;