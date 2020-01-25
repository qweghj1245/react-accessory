import React from 'react';

import { Wrapper, Left, Texture, Number, Image } from './BoxResult.style';

const BoxResult = ({ title, total, imgUrl, width, mr }) => {
  return (
    <Wrapper>
      <Left justify='start' dir='column' mr={mr}>
        <Texture>{title}</Texture>
        <Number>{total}</Number>
      </Left>
      <Image width={width} src={imgUrl} />
    </Wrapper>
  )
}

export default BoxResult;