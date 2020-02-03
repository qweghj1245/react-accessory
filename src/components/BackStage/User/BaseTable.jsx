import React, { useState } from 'react';
import { Wrapper, LineWrapper, HeadText, BodyText } from './BaseTable.style';
import { Flex } from '../../../assets/css/global.style';
import BaseButton from '../../BaseButton/BaseButton';

const headGroup = ['用戶名稱', 'Email', '訂單數', '身份', '功能'];
const BaseTable = () => {
  const [tBody] = useState([
    {
      id: '123',
      name: 'chrispy',
      email: 'chrispy@gmail.com',
      orderCount: 0,
      identity: '一般會員',
    },
  ]);

  return (
    <Wrapper>
      <LineWrapper head>
        {
          headGroup.map(item => <HeadText key={item}>{item}</HeadText>)
        }
      </LineWrapper>
      {
        tBody.map(item =>
          <LineWrapper key={item.id} pt='17'>
            <BodyText>{item.name}</BodyText>
            <BodyText>{item.email}</BodyText>
            <BodyText>{item.orderCount}</BodyText>
            <BodyText>{item.identity}</BodyText>
            <Flex justify='start'>
              <BaseButton padding='4px 12px' fz='14' mr='10' color='light-grey-text-black'>儲存</BaseButton>
              <BaseButton padding='4px 12px' fz='14' color='light-grey-text-red'>刪除</BaseButton>
            </Flex>
          </LineWrapper>)
      }
    </Wrapper>
  )
}

export default BaseTable;