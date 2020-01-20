import React, { useState } from 'react';
import gsap from 'gsap';

import { Icon, ImageWrapper } from '../../../assets/css/global.style';
import { Slider, SlideNotice, SlideTitle, NoticeFlex, Card, Circle, Texture, Wrapper, WrapperDivide } from './OrderSlider.style';
import arrow from '../../../assets/img/Icon/Icon material-keyboard-arrow-up.svg';

import product from '../../../assets/img/Products/pic_product_1_2.png';
import product2 from '../../../assets/img/Products/pic_product_1_3.png';

const products = [
  {
    image: product,
    title: '小熊紙膠帶',
    price: 120,
    count: 1,
    color: 'red',
  },
  {
    image: product2,
    title: 'like it!手機殼',
    price: 1203,
    count: 11,
    color: 'blue',
  },
];

const OrderSlider = () => {
  const [listWrap, setListWrap] = useState(null);
  const [slideState, setSlideState] = useState('auto');

  const slideToggle = () => {
    slideState === 'auto' ? setSlideState(0) : setSlideState('auto');
    gsap.to(listWrap, {
      duration: 1,
      ease: 'power4',
      height: slideState,
    });
  }
  return (
    <React.Fragment>
      <Slider onClick={() => slideToggle()}>
        <SlideTitle>訂單資訊</SlideTitle>
        <NoticeFlex>
          <SlideNotice>點此展開</SlideNotice>
          <Icon src={arrow} width='10' />
        </NoticeFlex>
      </Slider>
      <WrapperDivide ref={dom => setListWrap(dom)}>
        {
          products.map(item =>
            <Card key={item.price}>
              <ImageWrapper src={item.image} width='80' />
              <Wrapper>
                <Circle color={item.color} />
                <Texture>{item.title}</Texture>
                <Texture mb='0'>NT$ {item.price}</Texture>
              </Wrapper>
              <Texture mb='0'>數量：{item.count}</Texture>
            </Card>)
        }
      </WrapperDivide>
    </React.Fragment>
  )
};

export default OrderSlider;