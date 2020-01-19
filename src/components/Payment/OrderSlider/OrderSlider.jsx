import React from 'react';

import { Icon } from '../../../assets/css/global.style';
import { Slider, SlideNotice, SlideTitle, NoticeFlex } from './OrderSlider.style';
import arrow from '../../../assets/img/Icon/Icon material-keyboard-arrow-up.svg';

const OrderSlider = () => {
  return (
    <Slider>
      <SlideTitle>訂單資訊</SlideTitle>
      <NoticeFlex>
        <SlideNotice>點此展開</SlideNotice>
        <Icon src={arrow} width='10' />
      </NoticeFlex>
    </Slider>
  )
};

export default OrderSlider;