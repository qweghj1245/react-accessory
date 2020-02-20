import React, { useState } from 'react';

import { Flex } from '../../assets/css/global.style';
import { Side, Center } from './AddCount.style';

const AddCount = ({ total }) => {
  const [count, setCount] = useState(1);

  const handleCount = (type) => {
    if (total === count && type === 'add') return; 
    if (count === 1 && type === 'minus') return;
    type === 'minus' ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <Flex>
      <Side hide='right' onClick={() => handleCount('minus')}>-</Side>
      <Center>{count}</Center>
      <Side hide='left' onClick={() => handleCount('add')}>+</Side>
    </Flex>
  )
}

export default AddCount;