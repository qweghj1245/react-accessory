import React from 'react';
import { Wrapper, Top, Title, Texture, Divide, Bottom, BottomTitle, BottomTexture, BottomGroup } from './CheckoutInfo.style';
import RecommendList from '../RecommendList/RecommendList';

const CheckoutInfo = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Top>
          <Title>訂單已完成！</Title>
          <Texture>訂單編號 #00000001</Texture>
          <Texture>將透過EMAIL取得訂單狀態的更新資訊：</Texture>
          <Texture bold>abc123@gmail.com</Texture>
        </Top>
        <Divide />
        <Bottom>
          <BottomGroup>
            <BottomTitle>聯絡資訊</BottomTitle>
            <BottomTexture>王小明</BottomTexture>
            <BottomTexture>0912345678</BottomTexture>
          </BottomGroup>
          <BottomGroup>
            <BottomTitle>寄送資訊</BottomTitle>
            <BottomTexture>王小明</BottomTexture>
            <BottomTexture>0912345678</BottomTexture>
            <BottomTexture>台灣及離島</BottomTexture>
            <BottomTexture>100 台北市中正區八德路一段1號</BottomTexture>
          </BottomGroup>
          <BottomGroup>
            <BottomTitle>付款方式</BottomTitle>
            <BottomTexture>線上刷卡</BottomTexture>
          </BottomGroup>
          <BottomGroup>
            <BottomTitle>運送方式</BottomTitle>
            <BottomTexture>郵寄</BottomTexture>
          </BottomGroup>
        </Bottom>
      </Wrapper>
      <RecommendList />
    </React.Fragment>
  )
}

export default CheckoutInfo;