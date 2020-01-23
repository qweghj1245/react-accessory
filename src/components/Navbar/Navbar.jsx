import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Wrapper, Logo, ListWrapper, ListContent, FeatureIcons, IconWrap } from './Navbar.style';
import { Icon } from '../../assets/css/global.style';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import PersonDropdown from '../PersonDropdown/PersonDropdown';

import logo from '../../assets/img/Base/logo_navbar.svg';
import cart from '../../assets/img/Icon/Icon_navbar_cart.svg';
import favorite from '../../assets/img/Icon/Icon_navbar_favorite.svg';
import search from '../../assets/img/Icon/Icon_navbar_search.svg';
import profile from '../../assets/img/Icon/Icon_navbar_profile.svg';

const Navbar = ({ history }) => {
  const [productDropdownList] = useState(['紙製品', '手機配件', '包包提袋', '其他']);
  const [personDropdownList] = useState(['我的訂單', '修改資料', '會員登入']);
  const [showDropdown, setShowDropdown] = useState(false);

  const goRouter = (item) => {
    console.log(item);
    setShowDropdown(false)
    switch (item) {
      case '會員登入':
        return history.push('/login');
      case '我的訂單':
        return history.push('/order');
      default:
        return;
    }
  }

  return (
    <Wrapper>
      <Link to='/'>
        <Logo src={logo} />
      </Link>
      <ListWrapper>
        <ListContent mr={150}>
          <div onClick={() => history.push('/products')}>全部商品</div>
          <HeaderDropdown list={productDropdownList} />
        </ListContent>
        <ListContent mr={150} onClick={() => history.push('/about')}>關於我們</ListContent>
        <ListContent>購物須知</ListContent>
      </ListWrapper>
      <FeatureIcons>
        <Icon src={search} mr={25} />
        <Icon src={cart} mr={25} />
        <Icon src={favorite} mr={25} />
        <IconWrap>
          <Icon src={profile} onClick={() => setShowDropdown(!showDropdown)} />
          <PersonDropdown list={personDropdownList} showDropdown={showDropdown} goRouter={goRouter}/>
        </IconWrap>
      </FeatureIcons>
    </Wrapper>
  );
}

export default withRouter(Navbar);