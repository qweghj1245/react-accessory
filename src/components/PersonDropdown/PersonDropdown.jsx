import React from 'react';
import { Dropdown, DropdownItem, Wrapper } from './PersonDropdown.style';

const PersonDropdown = ({ list, showDropdown }) => {
  return (
    <Wrapper showDropdown={showDropdown}>
      <Dropdown>
        {
          list.map(item => <DropdownItem key={item} noBorder={item === '會員登入'}>{item}</DropdownItem>)
        }
      </Dropdown>
    </Wrapper>
  )
}

export default PersonDropdown;