import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Checkbox from '../../Checkbox/Checkbox';
import { Wrapper, LineWrapper, HeadText, BodyText } from './BaseTable.style';
import { Flex } from '../../../../assets/css/global.style';
import Tag from '../../Tag/Tag';

const headGroup = ['訂單號碼', '訂單日期', '訂單狀態', '付款狀態', '運送狀態', '訂購人', '合計'];
const BaseTable = ({ history }) => {
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
      <LineWrapper head>
        <Checkbox />
        {
          headGroup.map(item => <HeadText key={item}>{item}</HeadText>)
        }
      </LineWrapper>
      {
        tBody.map(item =>
          <LineWrapper key={item.id} pt='17' onClick={() => history.push('/backstage/order/aaa')}>
            <Flex onClick={e => e.stopPropagation()}>
              <Checkbox />
            </Flex>
            <BodyText>{item.id}</BodyText>
            <BodyText>{item.createdAt}</BodyText>
            <Tag>{item.orderStatus}</Tag>
            <Tag>{item.payStatus}</Tag>
            <Tag>{item.transportStatus}</Tag>
            <BodyText>{item.orderUser}</BodyText>
            <BodyText>{item.total}</BodyText>
          </LineWrapper>)
      }
    </Wrapper>
  )
}

export default withRouter(BaseTable);