import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, ImageGroup, FlexWrapper, Title, Price, Msg, Group, NormalText, Image } from './Product.style';
import { Flex, ImageWrapper } from '../../assets/css/global.style';
import ColorCircle from '../../components/ColorCircle/ColorCircle';
import BaseSelect from '../../components/BaseSelect/BaseSelect';
import AddCount from '../../components/AddCount/AddCount';
import BaseButton from '../../components/BaseButton/BaseButton';
import CollectButton from '../../components/CollectButton/CollectButton.jsx';
import BaseWrapper from '../../components/BaseWrapper/BaseWrapper.jsx';
import { getProductStart } from '../../redux/product/product.action';
import { selectAProduct } from '../../redux/product/product.selector';

const Product = ({ history }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectAProduct);
  const optionModel = useRef(null);

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

  useEffect(() => {
    dispatch(getProductStart(history.location.pathname.split('/')[2]));
  }, [dispatch, history]);

  return (
    <FlexWrapper>
      <Wrapper>
        <ImageWrapper src={product.photos[0]} width={385} />
        <ImageGroup>
          {
            product.photos.length > 1 ?
              product.photos.map((image, idx) => idx !== 0 ?
                <Image key={image} src={image} width='100' /> : null) : null
          }
        </ImageGroup>
      </Wrapper>
      <Wrapper width={322} ml={101}>
        <Title>{product.name}</Title>
        <Price>NT${product.price}</Price>
        <Msg>{product.description}</Msg>
        {
          product.size.length ?
            <Group mb={33}>
              <NormalText>尺寸</NormalText>
              <NormalText ml={0}>{sizeString(product.size)}</NormalText>
            </Group> : null
        }
        {
          product.colors.length ?
            <Group mb={30}>
              <NormalText>顏色</NormalText>
              <Flex>
                {
                  product.colors.map((color, idx) =>
                    <ColorCircle key={color} bg={color} mr={idx === product.colors.length - 1 ? null : 20} isActive />)
                }
              </Flex>
            </Group> : null
        }
        {
          product.options.length ?
            <Group mb={35}>
              <NormalText>選項</NormalText>
              <BaseSelect options={product.options.map(item => {
                return { label: item, value: item }
              })} change={e => optionModel.current = e} />
            </Group> : null
        }
        <Group mb={50}>
          <NormalText>數量</NormalText>
          <AddCount total={product.quantity} />
        </Group>
        <Group>
          <BaseButton color='light-brown' padding='8px 53px' mr='30'>加入購物車</BaseButton>
          <CollectButton />
        </Group>
      </Wrapper>
    </FlexWrapper>
  )
}

export default BaseWrapper(Product, 'product');