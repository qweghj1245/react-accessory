import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeWrapper, BannerImage, Recommend, PopularProductWrap, IntroWrapper, Image, TypeCardWrapper, TypeCard, TypeCardTitle, TypeCardBall,
  AbsoluteWrap, ShareWrapper, ShareTitle, ShareMsg, ShareContent, FlexWrap, SlideWrapper, Opi
} from './Home.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoTopButton from '../../components/GoTopButton/GoTopButton.jsx';
import BaseButton from '../../components/BaseButton/BaseButton.jsx';
import Card from '../../components/Card/Card';
import { CardImage } from '../../components/Card/Card.style';
import carsouel1 from '../../assets/img/Base/home_banner_1.png';
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
import { getProductsStart, filterProductsStart } from '../../redux/product/product.action';
import { selectHomeProducts } from '../../redux/product/product.selector';
const Home = ({ history }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectHomeProducts);
  const isLoading = useSelector(state => state.product.isLoading);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const [productTypes] = useState([
    {
      image: productType1,
      title: '紙製系列商品',
      ball: blueBall,
      ballSize: 64,
      top: -40,
      left: 0,
      type: 'paper',
    },
    {
      image: productType2,
      title: '手機配件小物',
      ball: greyBall,
      ballSize: 54,
      top: -45,
      left: 152,
      type: 'phoneAcc',
    },
    {
      image: productType3,
      title: '包包提袋專區',
      ball: pinkBall,
      ballSize: 32,
      top: -13,
      left: 184,
      type: 'bag',
    },
  ]);

  const setFilterType = type => {
    history.push('/products');
    dispatch(filterProductsStart(type));
  }

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductsStart());
    }
  }, [dispatch, products]);

  return (
    <HomeWrapper>
      <FlexWrap>
        <SlideWrapper>
          <Slider {...settings}>
            {
              [carsouel1, carsouel1, carsouel1].map(image => (
                <div key={image}>
                  <BannerImage src={image} />
                </div>
              ))
            }
          </Slider>
        </SlideWrapper>
        <Recommend>推薦商品</Recommend>
        <PopularProductWrap>
          {
            products.map(item => (
              <Card key={item._id} item={item} isLoading={isLoading} goProduct={() => history.push(`/product/${item._id}`)}/>
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
                <TypeCard key={item.type} onClick={() => setFilterType(item.type)}>
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
            <ShareMsg>上傳照片並標記<Opi>@OPI</Opi>的Instagram，與大家分享你的購物心得或創意風格，即可參加 當月抽獎活動並獲得單筆折扣或小禮物！</ShareMsg>
            <BaseButton>參加活動</BaseButton>
          </ShareContent>
          <GoTopButton right={10} />
        </ShareWrapper>
      </AbsoluteWrap>
    </HomeWrapper>
  )
};

export default Home;