import React from 'react';

import { Flex } from '../../../assets/css/global.style';
import { Wrapper, HeadBar, HeadText } from './StageContent.style';

const BackStage = () => {
  return (
    <Wrapper>
      <HeadBar justify='between'>
        <HeadText fz='20'>總覽</HeadText>
        <Flex>
          <HeadText mr='48'>進入商店</HeadText>
          <HeadText>管理員xxxxx</HeadText>
        </Flex>
      </HeadBar>
    </Wrapper>
  )
}

export default BackStage;