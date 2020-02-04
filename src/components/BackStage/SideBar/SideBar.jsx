import React from 'react';
import { withRouter } from 'react-router-dom';

import { Wrapper, LogoTitle, MenuText, MenuItem, Image } from './SideBar.style';
import { Icon } from '../../../assets/css/global.style';

import logo from '../../../assets/img/Base/logo_navbar.svg';
import icon from '../../../assets/img/Backstage/Icon_material-insert-chart.svg';
import icon2 from '../../../assets/img/Backstage/Icon_awesome-clipboard-list.svg';
import icon3 from '../../../assets/img/Backstage/Icon_awesome-box.svg';
import icon4 from '../../../assets/img/Backstage/Icon_material-people.svg';
import icon5 from '../../../assets/img/Backstage/Icon_material-local-offer.svg';
import icon6 from '../../../assets/img/Backstage/Icon_material-add-to-queue.svg';

const SideBar = ({ history, location, height }) => {
  const activeMenu = (path) => {
    return path === location.pathname.split('/').filter(item => !!item)[1];
  };

  return (
    <Wrapper dir='column' justify='start'>
      <Image src={logo} width='60' mb='11' onClick={() => history.push('/')}/>
      <LogoTitle>OPI</LogoTitle>
      <MenuItem active={activeMenu('total_view')} onClick={() => history.push('/backstage/total_view')}>
        <Icon width='12' mr='6' src={icon}/>
        <MenuText>總覽</MenuText>
      </MenuItem>
      <MenuItem active={activeMenu('order')} onClick={() => history.push('/backstage/order')}>
        <Icon width='12' mr='6' src={icon2}/>
        <MenuText>訂單</MenuText>
      </MenuItem>
      <MenuItem active={activeMenu('products')} onClick={() => history.push('/backstage/products')}>
        <Icon width='12' mr='6' src={icon3}/>
        <MenuText>商品</MenuText>
      </MenuItem>
      <MenuItem active={activeMenu('user')} onClick={() => history.push('/backstage/user')}>
        <Icon width='12' mr='6' src={icon4}/>
        <MenuText>會員</MenuText>
      </MenuItem>
      <MenuItem active={activeMenu('discount')} onClick={() => history.push('/backstage/discount')}>
        <Icon width='12' mr='6' src={icon5}/>
        <MenuText>折扣</MenuText>
      </MenuItem>
      <MenuItem active={activeMenu('bulletin')} onClick={() => history.push('/backstage/bulletin')}>
        <Icon width='12' mr='6' src={icon6}/>
        <MenuText>公告</MenuText>
      </MenuItem>
    </Wrapper>
  )
}

export default withRouter(SideBar);