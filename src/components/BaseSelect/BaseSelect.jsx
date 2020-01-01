import React, { useState } from 'react';
import { SelectWrapper, Inputs, Dropdown, DropdownItem } from './BaseSelect.style';
import { Icon } from '../../assets/css/global.style';

import Arrowdown from '../../assets/img/Icon/Icon_arrowdown.svg';

const BaseSelect = ({ defaultV, options, placeholder='請選擇選項...' }) => {
  const [isShow, setIsShow] = useState(false);
  const [realValue, setRealValue] = useState('');

  const handleSelect = (value) => {
    const label = options.find(item => item.value === value).label;
    setRealValue(label);
    setIsShow(false);
  }

  return (
    <SelectWrapper>
      <Inputs realValue={realValue} onClick={() => setIsShow(!isShow)}>
        {realValue ? realValue : (defaultV ? defaultV : placeholder)}
        <Icon src={Arrowdown} width={10} />
      </Inputs>
      <Dropdown isShow={isShow}>
        {
          options.map(item => <DropdownItem key={item.value} onClick={() => handleSelect(item.value)}>{item.label}</DropdownItem>)
        }
      </Dropdown>
    </SelectWrapper>
  )
}

export default BaseSelect;