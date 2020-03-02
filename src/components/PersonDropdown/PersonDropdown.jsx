import React from 'react';
import { Dropdown, DropdownItem, Wrapper } from './PersonDropdown.style';

const PersonDropdown = ({ list, showDropdown, goRouter }) => {
  return (
    <Wrapper showDropdown={showDropdown}>
      <Dropdown>
        {
          list.map(item => <DropdownItem key={item} noBorder={item === '會員登入' || item === '會員登出'} onClick={() => goRouter(item)}>{item}</DropdownItem>)
        }
      </Dropdown>
    </Wrapper>
  )
}

export default PersonDropdown;