import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Checkbox from '../../Checkbox/Checkbox';
import { Wrapper, LineWrapper, HeadText, BodyText } from './BaseTable.style';
import { Flex } from '../../../../assets/css/global.style';
import BaseButton from '../../../BaseButton/BaseButton';

const headGroup = ['名稱', '代碼', '優惠折扣', '次數優惠', '使用期限', '狀態', '功能'];
const BaseTable = ({ history }) => {
  const [tBody] = useState([
    {
      id: 'shjidosf',
      title: '脆皮雞排周年慶',
      discountCode: 'ASDCCC',
      discount: '0.8',
      useCount: '一次性',
      endDate: '2019/10/15 - 永不過期',
      status: '生效中',
    },
  ]);

  return (
    <Wrapper>
      <LineWrapper head>
        <Flex justify='start' ml='10'>
          <Checkbox />
        </Flex>
        {
          headGroup.map(item => <HeadText key={item}>{item}</HeadText>)
        }
      </LineWrapper>
      {
        tBody.map(item =>
          <LineWrapper key={item.id} pt='17'>
            <Flex justify='start' ml='10' onClick={e => e.stopPropagation()}>
              <Checkbox />
            </Flex>
            <BodyText>{item.title}</BodyText>
            <BodyText>{item.discountCode}</BodyText>
            <BodyText>${item.discount}</BodyText>
            <BodyText>{item.useCount}</BodyText>
            <BodyText>{item.endDate}</BodyText>
            <BodyText>{item.status}</BodyText>
            <Flex justify='start'>
              <BaseButton padding='4px 12px' fz='14' mr='10' color='light-grey-text-black'>編輯</BaseButton>
              <BaseButton padding='4px 12px' fz='14' color='light-grey-text-red'>刪除</BaseButton>
            </Flex>
          </LineWrapper>)
      }
    </Wrapper>
  )
}

export default withRouter(BaseTable);