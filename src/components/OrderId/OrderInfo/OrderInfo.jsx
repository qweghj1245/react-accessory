import React from 'react';

import { Wrapper, Title, Texture, Group } from './OrderInfo.style';

const OrderInfo = () => {
  return (
    <Wrapper>
      <Group>
        <Title>訂單資訊</Title>
        <Texture>訂單編號 #00000001</Texture>
        <Texture>2019-10-10 10:10PM</Texture>
        <Texture>abc123@gmail.com</Texture>
        <Texture>訂單狀態：已付款</Texture>
      </Group>
      <Group>
        <Title>聯絡資訊</Title>
        <Texture>王小明</Texture>
        <Texture>0912345678</Texture>
      </Group>
      <Group>
        <Title>付款方式</Title>
        <Texture>線上刷卡</Texture>
        <Texture>付款狀態：已付款</Texture>
        <Texture>xx交易編號：xxxxxxxxxxxxx</Texture>
      </Group>
      <Group>
        <Title>運送資訊</Title>
        <Texture>郵寄</Texture>
        <Texture>王小明</Texture>
        <Texture>0912345678</Texture>
        <Texture>台灣及離島</Texture>
        <Texture>100 台北市中正區八德路一段1號</Texture>
        <Texture>運送狀態：備貨中</Texture>
      </Group>
    </Wrapper>
  )
}

export default OrderInfo;