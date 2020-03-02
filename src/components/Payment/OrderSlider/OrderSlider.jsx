import React, { useState } from 'react';
import gsap from 'gsap';
import { Icon, ImageWrapper, Flex } from '../../../assets/css/global.style';
import { Slider, SlideNotice, SlideTitle, NoticeFlex, Card, Circle, Texture, Wrapper, WrapperDivide } from './OrderSlider.style';
import arrow from '../../../assets/img/Icon/Icon material-keyboard-arrow-up.svg';

const OrderSlider = ({ products, children }) => {
  let slideState = 0;
  const [listWrap, setListWrap] = useState(null);

  const slideToggle = () => {
    slideState = slideState === 'auto' ? 0 : 'auto';
    gsap.to(listWrap, {
      duration: 1,
      ease: 'power4',
      height: slideState,
    });
  }

  if (products && !products.length) return null;

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
            <Card key={item._id}>
              <ImageWrapper src={item.photos[0]} width='80' />
              <Wrapper>
                {
                  item.color || item.size ?
                    <Flex>
                      <Circle color={item.color} />
                      <Texture ml='16'>{item.size}</Texture>
                    </Flex> : null
                }
                <Texture>{item.name}</Texture>
                <Texture mb='0'>NT$ {item.price}</Texture>
              </Wrapper>
              <Texture mb='0'>數量：{item.purchaseQuantity}</Texture>
            </Card>)
        }
        {children}
      </WrapperDivide>
    </React.Fragment>
  )
};

export default OrderSlider;