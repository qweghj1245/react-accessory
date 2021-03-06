import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { selectLoginUser, selectCreateUser } from '../../redux/user/user.selector';
import { Wrapper, Logo, ListWrapper, ListContent, FeatureIcons, IconWrap, Hamburger, Head } from './Navbar.style';
import { Icon } from '../../assets/css/global.style';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import PersonDropdown from '../PersonDropdown/PersonDropdown';

import logo from '../../assets/img/Base/logo_navbar.svg';
import cart from '../../assets/img/Icon/Icon_navbar_cart.svg';
import favorite from '../../assets/img/Icon/Icon_navbar_favorite.svg';
// import search from '../../assets/img/Icon/Icon_navbar_search.svg';
import profile from '../../assets/img/Icon/Icon_navbar_profile.svg';

import { logoutStart } from '../../redux/user/user.action';
import { filterProductsStart } from '../../redux/product/product.action';
import PhoneAside from '../../components/PhoneAside/PhoneAside';
import gsap from 'gsap';

const Navbar = ({ history }) => {
  const dispatch = useDispatch();
  const [productDropdownList] = useState([
    {
      label: '紙製品',
      value: 'paper',
    },
    {
      label: '手機配件',
      value: 'phoneAcc',
    },
    {
      label: '包包提袋',
      value: 'bag',
    },
    {
      label: '其他',
      value: 'others',
    },
  ]);
  const [personDropdownList, setPersonDropdownList] = useState(['會員登入']);
  const [showDropdown, setShowDropdown] = useState(false);
  const loginUser = useSelector(selectLoginUser);
  const createUser = useSelector(selectCreateUser);

  const goRouter = (item) => {
    setShowDropdown(false)
    switch (item) {
      case '會員登入':
        return history.push('/login');
      case '會員登出':
        return logout();
      case '我的訂單':
        return history.push('/order');
      case '個人資料':
        return history.push('/profile');
      case '進入後台':
        return history.push('/backstage/total_view');
      default:
        return;
    }
  }

  const logout = () => {
    dispatch(logoutStart());
    history.push('/');
  }

  const setFilterType = type => {
    history.push('/products');
    dispatch(filterProductsStart(type));
  }

  const getAllProducts = () => {
    dispatch(filterProductsStart(''));
    history.push('/products');
  }

  const notLoginRedirect = (route) => {
    if (!loginUser) {
      history.push('/login');
    } else {
      history.push(route);
    }
  }

  /* 手機Slide 操作 */
  const wrapper = React.createRef();
  const toggleSlide = (type) => {
    wrapper.current.style.transitionDuration = '0s';
    gsap.to(wrapper.current, {
      left: type === 'on' ? 0 : '-100%',
      duration: .2,
    });
  }

  useEffect(() => {
    if ((loginUser||createUser)&&loginUser.userSource ==='google') {
      setPersonDropdownList([
        '我的訂單',
        '個人資料',
      ]);
    } else if (loginUser || createUser) {
      setPersonDropdownList([
        '我的訂單',
        '個人資料',
        '會員登出',
      ]);
    } else {
      setPersonDropdownList([
        '會員登入',
      ]);
    }
  }, [loginUser, createUser]);

  useEffect(() => {
    setShowDropdown(() => false);
  }, [history.location.pathname]);

  return (
    <Wrapper>
      <Hamburger onClick={() => toggleSlide('on')}/>
      <Link to='/'>
        <Logo src={logo} />
      </Link>
      <ListWrapper>
        <ListContent mr={150}>
          <div onClick={getAllProducts}>全部商品</div>
          <HeaderDropdown list={productDropdownList} setValue={setFilterType} />
        </ListContent>
        <ListContent mr={150} onClick={() => history.push('/about')}>關於我們</ListContent>
        <ListContent onClick={() => history.push('/shopping_notes')}>購物須知</ListContent>
      </ListWrapper>
      <FeatureIcons>
        {/* <Icon src={search} mr={25} /> */}
        <Icon src={cart} mr={25} onClick={() => notLoginRedirect('/payment')} />
        <Icon src={favorite} mr={25} onClick={() => notLoginRedirect('/collection')} />
        <IconWrap>
          <Head src={loginUser&&loginUser.photo ? loginUser.photo : profile} onClick={() => setShowDropdown(!showDropdown)} />
          <PersonDropdown list={personDropdownList} showDropdown={showDropdown} goRouter={goRouter} user={loginUser}/>
        </IconWrap>
      </FeatureIcons>
      <PhoneAside ref={wrapper} history={history} close={() => toggleSlide('off')}/>
    </Wrapper>
  );
}

export default withRouter(Navbar);