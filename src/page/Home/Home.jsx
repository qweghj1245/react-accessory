import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeWrapper, BannerImage, Recommend, PopularProductWrap, IntroWrapper, Image, TypeCardWrapper, TypeCard, TypeCardTitle, TypeCardBall,
  AbsoluteWrap, ShareWrapper, ShareTitle, ShareMsg, ShareContent, FlexWrap, SlideWrapper, Opi, PhoneShareWrapper
} from './Home.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoTopButton from '../../components/GoTopButton/GoTopButton.jsx';
import BaseButton from '../../components/BaseButton/BaseButton.jsx';
import Card from '../../components/Card/Card';
import { CardImage } from '../../components/Card/Card.style';
import carsouel1 from '../../assets/img/Base/home_banner_1.png';
import phoneCarousel from '../../assets/img/Base/p-home_banner_1.png';
import introBackground from '../../assets/img/Base/background_home_gray.svg';
import introImage1 from '../../assets/img/Base/home_pic_group2.svg';
import introImage2 from '../../assets/img/Base/home_pic_group.svg';
import phoneIntroImage1 from '../../assets/img/Base/pic_ios_1.svg';
import phoneIntroImage2 from '../../assets/img/Base/pic_ios_2.svg';
import productType1 from '../../assets/img/Base/pic_product_9_2.png';
import productType2 from '../../assets/img/Base/pic_product_10_2.png';
import productType3 from '../../assets/img/Base/pic_product_16.png';
import blueBall from '../../assets/img/Base/pic_home_blueball.svg';
import greyBall from '../../assets/img/Base/home_pic_grayball.svg';
import pinkBall from '../../assets/img/Base/pic_home_pinkball.svg';
import shareImage from '../../assets/img/Base/pic_home_event.jpg';
import { getProductsStart, filterProductsStart } from '../../redux/product/product.action';
import { selectHomeProducts } from '../../redux/product/product.selector';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
const Home = ({ history }) => {
  const dispatch = useDispatch();
  /* redux 取值*/
  const products = useSelector(selectHomeProducts);
  const isLoading = useSelector(state => state.product.isLoading);

  /* carousel config*/
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  const params = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
  }

  /* 靜態檔設定 */
  const carouselImage = useMemo(() => {
    return window.innerWidth < 960 ? phoneCarousel : carsouel1;
  }, []);
  const introImages1 = useMemo(() => {
    return window.innerWidth < 960 ? phoneIntroImage1 : introImage1;
  }, []);
  const introImages2 = useMemo(() => {
    return window.innerWidth < 960 ? phoneIntroImage2 : introImage2;
  }, []);
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

  /* 手機Card dom 操作 */
  const cardRef = React.createRef();
  const [cardHeight, setCardHeight] = useState(0);
  const setCardCb = useCallback(() => {
    setCardHeight(cardRef.current.offsetWidth);
  }, [cardRef]);

  /* 商品相關 */
  const setFilterType = type => {
    history.push('/products');
    dispatch(filterProductsStart(type));
  }

  useEffect(() => {
    if (window.innerWidth < 960) {
      setCardCb();
    }
    if (!products.length) {
      dispatch(getProductsStart());
    }
  }, [dispatch, products, setCardCb]);

  return (
    <HomeWrapper>
      <FlexWrap>
        <SlideWrapper>
          <Slider {...settings}>
            {
              [carouselImage, carouselImage, carouselImage].map(image => (
                <div key={image}>
                  <BannerImage src={image} />
                </div>
              ))
            }
          </Slider>
        </SlideWrapper>
        <Recommend>推薦商品</Recommend>
        {
          window.innerWidth > 960 ?
            <PopularProductWrap>
              {
                products.map(item => (
                  <Card
                    key={item._id}
                    item={item}
                    isLoading={isLoading}
                    goProduct={() => history.push(`/product/${item._id}`)} />
                ))
              }
            </PopularProductWrap> :
            <Swiper {...params}>
              {
                products.map(item => (
                  <div key={item._id}>
                    <Card
                      ref={cardRef}
                      height={window.innerWidth < 960 ? cardHeight : 304}
                      item={item}
                      isLoading={isLoading}
                      goProduct={() => history.push(`/product/${item._id}`)} />
                  </div>
                ))
              }
            </Swiper>
        }
      </FlexWrap>
      <AbsoluteWrap>
        <IntroWrapper url={introBackground}>
          <Image src={introImages1} width={960} mb={11} />
          <Image src={introImages2} width={703} mb={164} />
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
        <PhoneShareWrapper>
          <ShareWrapper>
            <Image src={shareImage} width={223} />
            <ShareContent>
              <ShareTitle>分享購物體驗</ShareTitle>
              <ShareMsg>上傳照片並標記<Opi>@OPI</Opi>的Instagram，與大家分享你的購物心得或創意風格，即可參加 當月抽獎活動並獲得單筆折扣或小禮物！</ShareMsg>
              <BaseButton>參加活動</BaseButton>
            </ShareContent>
            <GoTopButton right='0' bottom='30%' direct='fixed'/>
          </ShareWrapper>
        </PhoneShareWrapper>
      </AbsoluteWrap>
    </HomeWrapper>
  )
};

export default Home;