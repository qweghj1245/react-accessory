import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Checkbox from '../../Checkbox/Checkbox';
import { Wrapper, LineWrapper, HeadText, BodyText } from './BaseTable.style';
import { Flex, ImageWrapper } from '../../../../assets/css/global.style';
import Switch from '../../../Switch/Switch';
import BaseButton from '../../../BaseButton/BaseButton';

import image1 from '../../../../assets/img/Products/pic_product_1_2.png';

const headGroup = ['圖片', '主題', '連結', '日程', '立即顯示', '功能'];
const BaseTable = ({ history }) => {
  const [tBody] = useState([
    {
      id: 'shjidosf',
      imgUrl: image1,
      subject: '脆皮雞排周年慶',
      url: 'https://element.eleme.io/#/zh- CN/component/datetime-picker',
      startDate: '2019/10/15',
      endDate: '2019/10-20',
      isActive: false,
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
            <ImageWrapper src={item.imgUrl} width='60' />
            <BodyText>{item.subject}</BodyText>
            <BodyText>${item.url}</BodyText>
            <BodyText>{item.startDate}-{item.endDate}</BodyText>
            <Switch />
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