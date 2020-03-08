import React from 'react';
import { Skeleton } from '@material-ui/lab';

import { CardWrapper, CardImage, CardTitle, CardPrice } from './Card.style';

const Card = React.forwardRef((props, ref) => {
  const { item, isLoading, ...styles } = props;
  let width = window.innerWidth > 960;
  return (
    <div>
      {
        !isLoading ? (
          <CardWrapper ref={ref} onClick={props.goProduct}>
            <CardImage url={item.photos[0]} {...styles}></CardImage>
            <CardTitle>{item.name}</CardTitle>
            <CardPrice>NT${item.price}</CardPrice>
          </CardWrapper>) : (
            <CardWrapper>
              <Skeleton
                variant="rect"
                width={width ? 304 : '100%'}
                height={width ? 304 : window.innerWidth / 2 - 26} />
              <Skeleton width="60%" style={{ 'margin': '0 auto' }} height={20} />
              <Skeleton width="60%" style={{ 'margin': '0 auto' }} height={20} />
            </CardWrapper>)
      }
    </div>

  )
});

export default Card;