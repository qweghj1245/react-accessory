import React from 'react';

import { Wrapper, Title, Texture } from './Ranking.style';

const Ranking = ({ rankList, title }) => {
  return (
    <Wrapper>
      <Title justify='start'>{title}</Title>
      {
        rankList.map(rank => <Texture key={rank.title}>{rank.title}</Texture>)
      }
    </Wrapper>
  )
}

export default Ranking;