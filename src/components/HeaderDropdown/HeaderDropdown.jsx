import React from 'react';
import { Dropdown, DropdownItem } from './HeaderDropdown.style';

const HeaderDropdown = ({ list, children, setValue }) => {
  return (
    <div>
      <div>{children}</div>
      <Dropdown>
        {
          list.map(item => <DropdownItem key={item.value} onClick={() => setValue(item.value)}>{item.label}</DropdownItem>)
        }
      </Dropdown>
    </div>
  )
}

export default HeaderDropdown;