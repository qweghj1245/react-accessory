import React, { useState } from 'react';
import Checkbox from '../../Checkbox/Checkbox';
import { Wrapper, LineWrapper, HeadText, BodyText, StatusText } from './BaseTable.style';

const headGroup = ['訂單號碼', '訂單日期', '訂單狀態', '付款狀態', '運送狀態', '訂購人', '合計'];
const BaseTable = () => {
  const [tBody] = useState([
    {
      id: '123123',
      createdAt: '2019/10/15',
      orderStatus: '處理中',
      payStatus: '未付款',
      transportStatus: '備貨中',
      orderUser: 'chrispy(dguhwej@gmail.com)',
      total: 'NT$100',
    },
  ]);
  return (
    <Wrapper>
      <LineWrapper>
        <Checkbox />
        {
          headGroup.map(item => <HeadText>{item}</HeadText>)
        }
      </LineWrapper>
      {
        tBody.map(item =>
          <LineWrapper key={item.id} pt='17'>
            <Checkbox />
            <BodyText>{item.id}</BodyText>
            <BodyText>{item.createdAt}</BodyText>
            <StatusText>{item.orderStatus}</StatusText>
            <StatusText>{item.payStatus}</StatusText>
            <StatusText>{item.transportStatus}</StatusText>
            <BodyText>{item.orderUser}</BodyText>
            <BodyText>{item.total}</BodyText>
          </LineWrapper>)
      }
    </Wrapper>
  )
}

export default BaseTable;