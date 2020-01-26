import React from 'react';
import { Flex, Icon } from '../../../assets/css/global.style';
import { Square, Page } from './Pagination.style';

import iconLeft from '../../../assets/img/Icon/page_lightarrow.svg';
import iconRight from '../../../assets/img/Icon/page_rightarrow.svg';

const Pagination = () => {
  return (
    <Flex mt='30'>
      <Square left><Icon src={iconLeft} width='3'/></Square>
      <Page>1</Page>
      <Square right><Icon src={iconRight} width='3'/></Square>
    </Flex>
  )
}

export default Pagination;