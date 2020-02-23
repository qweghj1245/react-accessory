import React, { useState } from 'react';

import { Flex } from '../../assets/css/global.style';
import { Side, Center } from './AddCount.style';

const AddCount = ({ total, getCount }) => {
  const [count, setCount] = useState(1);

  const handleCount = (type) => {
    if (total === count && type === 'add') return; 
    if (count === 1 && type === 'minus') return;
    if (type === 'minus') {
      setCount(count - 1);
      getCount(count - 1);
    } else {
      setCount(count + 1);
      getCount(count + 1);
    }
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