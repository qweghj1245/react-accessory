import React from 'react';
import { Dropdown, DropdownItem } from './HeaderDropdown.style';

const HeaderDropdown = ({ list, children }) => {
  return (
    <div>
      <div>{children}</div>
      <Dropdown>
        {
          list.map(item => <DropdownItem key={item}>{item}</DropdownItem>)
        }
      </Dropdown>
    </div>
  )
}

export default HeaderDropdown;