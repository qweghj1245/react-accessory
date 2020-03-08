import React from 'react';
import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { FooterWrapper, TopTextWrapper, TopText } from './Footer.style';
import { Icon, Flex } from '../../assets/css/global.style';

import FB from '../../assets/img/Icon/Icon_footer_facebook.svg';
import IG from '../../assets/img/Icon/Icon_footer_instagram.svg';

const Footer = ({ history }) => {
  const alert = useAlert();

  const warning = (msg) => {
    alert.error(msg);
  };

  return (
    <FooterWrapper>
      <TopTextWrapper>
        <TopText mr={30} onClick={() => history.push('/about')}>關於我們</TopText>
        <TopText mr={30} onClick={() => history.push('/about')}>購物須知</TopText>
        <TopText onClick={() => warning('暫時不提供')}>聯絡方式</TopText>
      </TopTextWrapper>
      <Flex>
        <Icon src={FB} mr={30} onClick={() => warning('暫時不提供')} />
        <Icon src={IG} onClick={() => warning('暫時不提供')} />
      </Flex>
    </FooterWrapper>
  )
};

export default withRouter(Footer);
