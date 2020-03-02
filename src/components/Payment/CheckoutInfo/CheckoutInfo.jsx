import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, Top, Title, Texture, Divide, Bottom, BottomTitle, BottomTexture, BottomGroup } from './CheckoutInfo.style';
import RecommendList from '../RecommendList/RecommendList';
import { selectLoginUser } from '../../../redux/user/user.selector';

const CheckoutInfo = () => {
  const order = useSelector(state => state.order.singleOrder);
  const user = useSelector(selectLoginUser);
  if (!order) return null;
  return (
    <React.Fragment>
      <Wrapper>
        <Top>
          <Title>訂單已完成！</Title>
          <Texture>訂單編號 {order.orderNumber}</Texture>
          <Texture>將透過EMAIL取得訂單狀態的更新資訊：</Texture>
          <Texture bold>{user.email}</Texture>
        </Top>
        <Divide />
        <Bottom>
          <BottomGroup>
            <BottomTitle>聯絡資訊</BottomTitle>
            <BottomTexture>{order.contactPerson}</BottomTexture>
            <BottomTexture>{order.contactPhoneNumber}</BottomTexture>
          </BottomGroup>
          <BottomGroup>
            <BottomTitle>寄送資訊</BottomTitle>
            <BottomTexture>{order.recipientPerson}</BottomTexture>
            <BottomTexture>{order.recipientPhoneNumber}</BottomTexture>
            <BottomTexture>{order.country === 'Taiwan' ? '台灣' : ''}</BottomTexture>
            <BottomTexture>{order.recipientPostalCode} {order.recipientCounty}{order.recipientArea}{order.recipientAddress}</BottomTexture>
          </BottomGroup>
          <BottomGroup>
            <BottomTitle>付款方式</BottomTitle>
            <BottomTexture>{order.payment === 'creditCard' ? '線上刷卡' : ''}</BottomTexture>
          </BottomGroup>
          <BottomGroup>
            <BottomTitle>運送方式</BottomTitle>
            <BottomTexture>{order.transport ? '郵寄' : ''}</BottomTexture>
          </BottomGroup>
        </Bottom>
      </Wrapper>
      <RecommendList />
    </React.Fragment>
  )
}

export default CheckoutInfo;