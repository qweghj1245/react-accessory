import React from 'react';
import moment from 'moment';
import { Wrapper, Title, Texture, Group } from './OrderInfo.style';
const OrderInfo = ({ order }) => {
  const convertOrderStatus = (status) => {
    switch (status) {
      case 'notYet':
        return '未完成';
      case 'handling':
        return '處理中';
      case 'isComplete':
        return '已完成';
      default:
        return;
    }
  };
  const convertPayStatus = (status) => {
    switch (status) {
      case 'isPay':
        return '完成付款';
      case 'noPay':
        return '付款未完成';
      default:
        return;
    }
  };
  const convertDeliveryStatus = (status) => {
    switch (status) {
      case 'notYet':
        return '未完成';
      case 'inStock':
        return '運送中';
      case 'shipped':
        return '已抵達';
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <Group>
        <Title>訂單資訊</Title>
        <Texture>訂單編號 {order.orderNumber}</Texture>
        <Texture>{moment(order.createdAt).format('YYYY-MM-DD hh:mm A')}</Texture>
        <Texture>{order.email}</Texture>
        <Texture>訂單狀態：{convertOrderStatus(order.orderStatus)}</Texture>
      </Group>
      <Group>
        <Title>聯絡資訊</Title>
        <Texture>{order.contactPerson}</Texture>
        <Texture>{order.contactPhoneNumber}</Texture>
      </Group>
      <Group>
        <Title>付款方式</Title>
        <Texture>{order.payment === 'creditCard' ? '線上刷卡' : ''}</Texture>
        <Texture>付款狀態：{convertPayStatus(order.payStatus)}</Texture>
        <Texture>交易編號：{order.transactionNumber}</Texture>
      </Group>
      <Group>
        <Title>運送資訊</Title>
        <Texture>{order.transport === 'Fedex' ? '郵寄' : ''}</Texture>
        <Texture>{order.recipientPerson}</Texture>
        <Texture>{order.recipientPhoneNumber}</Texture>
        <Texture>{order.country === 'Taiwan' ? '台灣' : ''}</Texture>
        <Texture>{order.recipientPostalCode} {order.recipientCounty}{order.recipientArea}{order.recipientAddress}</Texture>
        <Texture>運送狀態：{convertDeliveryStatus(order.delivery)}</Texture>
      </Group>
    </Wrapper>
  )
}

export default OrderInfo;