import React from 'react';
import { FooterWrapper, TopTextWrapper, TopText } from './Footer.style';
import { Icon, Flex } from '../../assets/css/global.style';

import FB from '../../assets/img/Icon/Icon_footer_facebook.svg';
import IG from '../../assets/img/Icon/Icon_footer_instagram.svg';

const Footer = () => (
  <FooterWrapper>
    <TopTextWrapper>
      <TopText mr={30}>關於我們</TopText>
      <TopText mr={30}>購物須知</TopText>
      <TopText>聯絡方式</TopText>
    </TopTextWrapper>
    <Flex>
      <Icon src={FB} mr={30} />
      <Icon src={IG} />
    </Flex>
  </FooterWrapper>
);

export default Footer;
