import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { Wrapper, ImageGroup, FlexWrapper, Title, Price, Msg, Group, NormalText, Image, ProductImage } from './Product.style';
import { Flex } from '../../assets/css/global.style';
import ColorCircle from '../../components/ColorCircle/ColorCircle';
import BaseSelect from '../../components/BaseSelect/BaseSelect';
import AddCount from '../../components/AddCount/AddCount';
import BaseButton from '../../components/BaseButton/BaseButton';
import CollectButton from '../../components/CollectButton/CollectButton.jsx';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import Skeleton from '../../components/Product/Skeleton/Skeleton';
import { getProductStart, collectStart } from '../../redux/product/product.action';
import { addCartStart } from '../../redux/cart/cart.action';
import { selectAProduct } from '../../redux/product/product.selector';

const Product = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const product = useSelector(selectAProduct);
  const isLoading = useSelector(state => state.product.isLoading);
  const user = useSelector(state => state.user.loginUser);
  const optionModel = useRef(null);
  const totalCount = useRef(1);
  const [colorModel, setColorModel] = useState(null);

  /* layout */
  const sizeString = (sizeArr) => {
    if (!sizeArr.length) return '';
    let str = '';
    sizeArr.forEach((item, idx) => {
      if (item.includes('mm')) {
        str += item.replace('mm', '毫米');
      } else if (item.includes('cm')) {
        str += item.replace('cm', '公分');
      } else if (item.includes('m')) {
        str += item.replace('m', '公尺');
      }
      if (idx !== sizeArr.length - 1) str += ' × ';
    });
    return str;
  }

  /* 收藏、購物車*/
  const setCollect = (status) => {
    dispatch(collectStart({
      id: product._id,
      isCollected: status,
    }));
  }
  const addToCart = (product) => {
    if (!user) return alert.error('請先登入');
    dispatch(addCartStart({
      product: product._id,
      size: product.options.length ? optionModel.current : null,
      purchaseQuantity: totalCount.current,
      color: colorModel,
    }));
    alert.success('加入購物車成功！');
  }
  const getCount = (count) => {
    totalCount.current = count;
  };

  /* 手機Card dom 操作 */
  const cardRef = React.createRef();
  const [cardHeight, setCardHeight] = useState(0);
  const setCardCb = useCallback(() => {
    setCardHeight(cardRef.current.offsetWidth);
  }, [cardRef]);
  useEffect(() => {
    if (window.innerWidth < 960 && cardRef && cardRef.current) {
      setCardCb();
    }
  }, [setCardCb, cardRef]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductStart(history.location.pathname.split('/')[2]));
  }, [dispatch, history]);

  if (!product) return <Skeleton />;
  return (
    <React.Fragment>
      {
        isLoading ? <Skeleton /> :
          <FlexWrapper>
            <Wrapper>
              <ProductImage src={product.photos[0]} />
              <ImageGroup>
                {
                  product.photos.length > 1 ?
                    product.photos.map((image, idx) => idx !== 0 ?
                      <Image
                        ref={cardRef}
                        key={image}
                        src={image}
                        width='100'
                        height={window.innerWidth > 960 ? 110 : cardHeight} /> : null) : null
                }
              </ImageGroup>
            </Wrapper>
            <Wrapper width={322} ml={101}>
              <Title>{product.name}</Title>
              <Price>NT${product.price}</Price>
              <Msg>{product.description}</Msg>
              {
                product.size.length ?
                  <Group mb={33}  justify='start'>
                    <NormalText>尺寸</NormalText>
                    <NormalText ml={0}>{sizeString(product.size)}</NormalText>
                  </Group> : null
              }
              {
                product.colors.length ?
                  <Group mb={30} justify='start'>
                    <NormalText>顏色</NormalText>
                    <Flex>
                      {
                        product.colors.map((color, idx) =>
                          <ColorCircle
                            key={color}
                            bg={color}
                            mr={idx === product.colors.length - 1 ? null : 20}
                            isActive={colorModel === color}
                            onClick={() => setColorModel(color)} />)
                      }
                    </Flex>
                  </Group> : null
              }
              {
                product.options.length ?
                  <Group mb={35} justify='start'>
                    <NormalText>選項</NormalText>
                    <BaseSelect options={product.options.map(item => {
                      return { label: item, value: item }
                    })} change={e => optionModel.current = e} />
                  </Group> : null
              }
              <Group mb={50} justify='start'>
                <NormalText>數量</NormalText>
                <AddCount total={product.quantity} getCount={getCount} />
              </Group>
              <Group justify={window.innerWidth > 960 ? 'start' : 'center'}>
                <BaseButton color='light-brown' padding='8px 53px' mr='30' onClick={() => addToCart(product)}>加入購物車</BaseButton>
                <CollectButton product={product} user={user} collect={setCollect} />
              </Group>
            </Wrapper>
          </FlexWrapper>
      }
    </React.Fragment>
  )
}

export default BaseWrapper(Product, 'product');