import React from 'react';
import { Dropdown, DropdownItem, Wrapper } from './PersonDropdown.style';

const PersonDropdown = ({ list, showDropdown, goRouter, user }) => {
  return (
    <Wrapper showDropdown={showDropdown}>
      <Dropdown>
        {
          list.map(item =>
            <DropdownItem
              key={item}
              noBorder={item === '會員登入' || item === '會員登出' || (item === '個人資料' && user && user.userSource === 'google')}
              onClick={() => goRouter(item)}>{item}</DropdownItem>)
        }
      </Dropdown>
    </Wrapper>
  )
}

export default PersonDropdown;