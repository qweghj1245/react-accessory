import React, { useState } from 'react';
import { SelectWrapper, Inputs, Dropdown, DropdownItem, Triangle } from './BaseSelect.style';
import { Icon } from '../../assets/css/global.style';

import Arrowdown from '../../assets/img/Icon/Icon_arrowdown.svg';

const BaseSelect = ({ change, changeVal, triangle, defaultV, options, placeholder = '請選擇選項...', dropHeight, ...otherStyle }) => {
  const [isShow, setIsShow] = useState(false);
  const [realValue, setRealValue] = useState('');

  const handleSelect = (value) => {
    const label = options.find(item => item.value === value).label;
    setRealValue(label);
    setIsShow(false);
    if (change) {
      change(label);
    }
    if (changeVal) {
      changeVal(value);
    }
  }

  return (
    <SelectWrapper {...otherStyle}>
      <Inputs {...otherStyle} defaultV={defaultV} realValue={realValue} onClick={() => setIsShow(!isShow)}>
        {realValue ? realValue : (defaultV ? defaultV : placeholder)}
        {
          triangle ? <Triangle isShow={isShow} /> : <Icon src={Arrowdown} width={10} />
        }
      </Inputs>
      <Dropdown isShow={isShow} dropHeight={dropHeight}>
        {
          options.map(item => <DropdownItem key={item.value} onClick={() => handleSelect(item.value)}>{item.label}</DropdownItem>)
        }
      </Dropdown>
    </SelectWrapper>
  )
}

export default BaseSelect;