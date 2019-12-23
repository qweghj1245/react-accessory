import React, { useState } from 'react';
import {
  HomeWrapper, BannerImage, Recommend, PopularProductWrap, Card, CardImage, CardTitle,
  CardPrice, IntroWrapper, Image, TypeCardWrapper, TypeCard, TypeCardTitle, TypeCardBall,
  AbsoluteWrap, ShareWrapper, ShareTitle, ShareMsg, ShareContent, FlexWrap, SlideWrapper,
} from './Home.style';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BaseButton from '../../components/BaseButton/BaseButton.jsx';

import carsouel1 from '../../assets/img/Base/home_banner_1.png';
import product1 from '../../assets/img/Base/pic_product_10.png';
import product2 from '../../assets/img/Base/pic_product_7.png';
import product3 from '../../assets/img/Base/pic_product_14.png';
import introBackground from '../../assets/img/Base/background_home_gray.svg';
import introImage1 from '../../assets/img/Base/home_pic_group2.svg';
import introImage2 from '../../assets/img/Base/home_pic_group.svg';
import productType1 from '../../assets/img/Base/pic_product_9_2.png';
import productType2 from '../../assets/img/Base/pic_product_10_2.png';
import productType3 from '../../assets/img/Base/pic_product_16.png';
import blueBall from '../../assets/img/Base/pic_home_blueball.svg';
import greyBall from '../../assets/img/Base/home_pic_grayball.svg';
import pinkBall from '../../assets/img/Base/pic_home_pinkball.svg';
import shareImage from '../../assets/img/Base/pic_home_event.jpg';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [products] = useState([
    {
      image: product1,
      title: '黑白動物2020年曆',
      price: 450,
    },
    {
      image: product2,
      title: '戲水假期透明手機殼',
      price: 490,
    },
    {
      image: product3,
      title: 'like it!掛報',
      price: 350,
    },
  ])
  const [productTypes] = useState([
    {
      image: productType1,
      title: '紙製系列商品',
      ball: blueBall,
      ballSize: 64,
      top: -40,
      left: 0,
    },
    {
      image: productType2,
      title: '手機配件小物',
      ball: greyBall,
      ballSize: 54,
      top: -45,
      left: 152,
    },
    {
      image: productType3,
      title: '包包提袋專區',
      ball: pinkBall,
      ballSize: 32,
      top: -13,
      left: 184,
    },
  ])

  return (
    <HomeWrapper>
      <FlexWrap>
        <SlideWrapper>
          <Slider {...settings}>
            {
              [carsouel1, carsouel1, carsouel1].map(image => (
                <div key={image}>
                  <BannerImage src={image}/>
                </div>
              ))
            }
          </Slider>
        </SlideWrapper>
        <Recommend>推薦商品</Recommend>
        <PopularProductWrap>
          {
            products.map(item => (
              <Card key={item.title}>
                <CardImage url={item.image}></CardImage>
                <CardTitle>{item.title}</CardTitle>
                <CardPrice>NT${item.price}</CardPrice>
              </Card>
            ))
          }
        </PopularProductWrap>
      </FlexWrap>
      <AbsoluteWrap>
        <IntroWrapper url={introBackground}>
          <Image src={introImage1} width={960} mb={11} />
          <Image src={introImage2} width={703} mb={164} />
          <TypeCardWrapper>
            {
              productTypes.map(item => (
                <TypeCard key={item.title}>
                  <CardImage url={item.image} height={268} />
                  <TypeCardTitle>{item.title}</TypeCardTitle>
                  <TypeCardBall src={item.ball} width={item.ballSize} top={item.top} left={item.left} />
                </TypeCard>
              ))
            }
          </TypeCardWrapper>
        </IntroWrapper>
        <ShareWrapper>
          <Image src={shareImage} width={223} />
          <ShareContent>
            <ShareTitle>分享購物體驗</ShareTitle>
            <ShareMsg>上傳照片並標記@OPI的Instagram，與大家分享你的購物心得或創意風格，即可參加 當月抽獎活動並獲得單筆折扣或小禮物！</ShareMsg>
            <BaseButton>參加活動</BaseButton>
          </ShareContent>
        </ShareWrapper>
      </AbsoluteWrap>
    </HomeWrapper>
  )
};

export default Home;