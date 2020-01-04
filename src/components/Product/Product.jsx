import React from 'react';
import { Wrapper, ImageGroup, FlexWrapper, Title, Price, Msg, Group, NormalText } from './Product.style';
import { ImageWrapper, Flex } from '../../assets/css/global.style';
import ColorCircle from '../ColorCircle/ColorCircle';
import BaseSelect from '../BaseSelect/BaseSelect';
import AddCount from '../AddCount/AddCount';
import BaseButton from '../BaseButton/BaseButton';
import CollectButton from '../CollectButton/CollectButton.jsx';

import image1 from '../../assets/img/Products/pic_product_1.png';
import image2 from '../../assets/img/Products/pic_product_1_2.png';
import image3 from '../../assets/img/Products/pic_product_1_3.png';
import image4 from '../../assets/img/Products/pic_product_1_4.png';

const Product = () => {
  const options = [
    {
      label: '我是選項u',
      value: 'jfdioqjdioqwio',
    },
    {
      label: '我是選項y',
      value: 'jfdioqjdiaaaaoqwio',
    }
  ];
  return (
    <FlexWrapper>
      <Wrapper>
        <ImageWrapper src={image1} width={385} />
        <ImageGroup>
          <ImageWrapper src={image2} />
          <ImageWrapper src={image3} />
          <ImageWrapper src={image4} />
        </ImageGroup>
      </Wrapper>
      <Wrapper width={322} ml={101}>
        <Title>like it!手機殼</Title>
        <Price>NT$490</Price>
        <Msg>使用有機矽材製作，具有果凍外殼的優點，易於拆 卸、色澤鮮豔、手感柔軟，可以保護手機不易受損。</Msg>
        <Group mb={33}>
          <NormalText>尺寸</NormalText>
          <NormalText ml={0}>9.3公分 × 8.5公分 × 2.2公分</NormalText>
        </Group>
        <Group mb={30}>
          <NormalText>顏色</NormalText>
          <Flex>
            <ColorCircle bg='blue' mr={20} isActive />
            <ColorCircle bg='red' />
          </Flex>
        </Group>
        <Group mb={35}>
          <NormalText>選項</NormalText>
          <BaseSelect options={options} />
        </Group>
        <Group mb={50}>
          <NormalText>數量</NormalText>
          <AddCount />
        </Group>
        <Group>
          <BaseButton color='light-brown' padding='8px 53px' mr='30'>加入購物車</BaseButton>
          <CollectButton />
        </Group>
      </Wrapper>
    </FlexWrapper>
  )
}

export default Product;