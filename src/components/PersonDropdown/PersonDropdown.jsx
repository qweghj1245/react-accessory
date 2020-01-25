import React from 'react';
import { Dropdown, DropdownItem, Wrapper } from './PersonDropdown.style';

const PersonDropdown = ({ list, showDropdown, goRouter }) => {
  return (
    <Wrapper showDropdown={showDropdown}>
      <Dropdown>
        {
          list.map(item => <DropdownItem key={item} noBorder={item === '進入後台'} onClick={() => goRouter(item)}>{item}</DropdownItem>)
        }
      </Dropdown>
    </Wrapper>
  )
}

export default PersonDropdown;