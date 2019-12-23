import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Logo , ListWrapper, ListContent, FeatureIcons } from './Navbar.style';
import { Icon } from '../../assets/css/global.style';

import logo from '../../assets/img/Base/logo_navbar.svg';
import cart from '../../assets/img/Icon/Icon_navbar_cart.svg';
import favorite from '../../assets/img/Icon/Icon_navbar_favorite.svg';
import search from '../../assets/img/Icon/Icon_navbar_search.svg';
import profile from '../../assets/img/Icon/Icon_navbar_profile.svg';

const Navbar = () => (
  <Wrapper>
    <Link to='/'>
      <Logo src={logo} />
    </Link>
    <ListWrapper>
      <ListContent mr={150} to='/products'>
        全部商品
      </ListContent>
      <ListContent mr={150} to='/about'>關於我們</ListContent>
      <ListContent to='/protocol'>購物須知</ListContent>
    </ListWrapper>
    <FeatureIcons>
      <Icon src={search} mr={25}></Icon>
      <Icon src={cart} mr={25}></Icon>
      <Icon src={favorite} mr={25}></Icon>
      <Icon src={profile}></Icon>
    </FeatureIcons>
  </Wrapper>
);

export default Navbar;