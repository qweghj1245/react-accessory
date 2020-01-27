import React, { useState } from 'react';

import PositionText from '../../../components/BackStage/PositionText/PositionText';
import { Wrapper, GridWrapper, WhiteSpace, BigTitle, BoldTitle, SmallTitle, Group, Card, Circle, Texture, CardWrapper, CardGroup, PriceText } from './OrderId.style';
import { ImageWrapper, Flex } from '../../../assets/css/global.style';
import Tag from '../../../components/BackStage/Tag/Tag';

import product from '../../../assets/img/Products/pic_product_1_2.png';
import product2 from '../../../assets/img/Products/pic_product_1_3.png';

const OrderId = () => {
  const [products] = useState([
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
      price: 43,
      count: 11,
      color: 'blue',
    },
  ]);
  return (
    <Wrapper>
      <PositionText title='訂單' id='123123' />
      <GridWrapper>
        <WhiteSpace>
          <Group>
            <BigTitle>訂單資料</BigTitle>
            <BoldTitle>訂單號碼</BoldTitle>
            <SmallTitle>2019120810523649</SmallTitle>
            <BoldTitle>訂單日期</BoldTitle>
            <SmallTitle>2019-12-08 6:00PM</SmallTitle>
            <BoldTitle>訂單狀態</BoldTitle>
            <Tag mb='20'>處理中</Tag>
          </Group>
          <Group>
            <BigTitle>聯絡資訊</BigTitle>
            <BoldTitle>訂購人</BoldTitle>
            <SmallTitle>王小明</SmallTitle>
            <BoldTitle>訂單Email</BoldTitle>
            <SmallTitle>abc123@gmail.com</SmallTitle>
            <BoldTitle>手機號碼</BoldTitle>
            <SmallTitle>0912345678</SmallTitle>
            <BoldTitle>訂購帳號</BoldTitle>
            <SmallTitle mb='3' blue>王小明</SmallTitle>
            <SmallTitle mb='20'>abc123@gmail.com</SmallTitle>
          </Group>
          <Group>
            <BigTitle>付款資訊</BigTitle>
            <BoldTitle>付款狀態</BoldTitle>
            <Tag mb='10'>已付款</Tag>
            <BoldTitle>付款方式</BoldTitle>
            <SmallTitle mb='20'>線上刷卡</SmallTitle>
          </Group>
          <Group>
            <BigTitle>付款資訊</BigTitle>
            <BoldTitle>運送狀態</BoldTitle>
            <Tag mb='10'>備貨中</Tag>
            <BoldTitle>運送方式</BoldTitle>
            <SmallTitle>郵寄</SmallTitle>
            <BoldTitle>收件人</BoldTitle>
            <SmallTitle>王小明</SmallTitle>
            <BoldTitle>收件人手機號碼</BoldTitle>
            <SmallTitle>0912345678</SmallTitle>
            <BoldTitle>運送費用</BoldTitle>
            <SmallTitle>NT$60</SmallTitle>
            <BoldTitle>運送地址</BoldTitle>
            <SmallTitle mb='5'>123巷45號</SmallTitle>
            <SmallTitle mb='5'>中正區</SmallTitle>
            <SmallTitle mb='5'>100</SmallTitle>
            <SmallTitle mb='5'>台北市</SmallTitle>
            <SmallTitle mb='5'>台灣</SmallTitle>
          </Group>
        </WhiteSpace>
        <WhiteSpace>
          <Group>
            <BigTitle noBorder>商品詳情</BigTitle>
            <CardGroup>
              {
                products.map(item => (
                  <Card key={item.price}>
                    <ImageWrapper src={item.image} width='80' />
                    <CardWrapper>
                      <Circle color={item.color} />
                      <Texture>{item.title}</Texture>
                      <Texture mb='0'>NT$ {item.price}</Texture>
                    </CardWrapper>
                    <Texture mb='0' start='true'>數量：{item.count}</Texture>
                  </Card>
                ))
              }
            </CardGroup>
            <Flex justify='between' mb='2'>
              <PriceText>商品金額</PriceText>
              <PriceText>xxxx</PriceText>
            </Flex>
            <Flex justify='between' mb='2'>
              <PriceText>折價券</PriceText>
              <PriceText>-xxxx</PriceText>
            </Flex>
            <Flex justify='between' mb='17'>
              <PriceText>運費</PriceText>
              <PriceText>xxx</PriceText>
            </Flex>
            <Flex justify='between'>
              <PriceText>總金額</PriceText>
              <PriceText>NT$xxxx</PriceText>
            </Flex>
          </Group>
        </WhiteSpace>
      </GridWrapper>
    </Wrapper>
  )
}

export default OrderId;