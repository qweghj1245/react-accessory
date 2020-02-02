import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Checkbox from '../../Checkbox/Checkbox';
import { Wrapper, LineWrapper, HeadText, BodyText } from './BaseTable.style';
import { Flex, ImageWrapper } from '../../../../assets/css/global.style';
import Switch from '../../../Switch/Switch';
import BaseButton from '../../../BaseButton/BaseButton';

import image1 from '../../../../assets/img/Products/pic_product_1_2.png';

const headGroup = ['圖片', '商品', '金額', '庫存', '狀態', '商品上架', '功能'];
const BaseTable = ({ history }) => {
  const [tBody] = useState([
    {
      id: 'shjidosf',
      imgUrl: image1,
      title: '脆皮雞排',
      price: 100,
      inStock: 0,
      status: '未上架',
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
            <BodyText>{item.title}</BodyText>
            <BodyText>${item.price}</BodyText>
            <BodyText>{item.inStock}</BodyText>
            <BodyText>{item.status}</BodyText>
            <Switch />
            <Flex justify='start'>
              <BaseButton padding='4px 12px' fz='14' mr='10' color='light-grey-text-black'>儲存</BaseButton>
              <BaseButton padding='4px 12px' fz='14' color='light-grey-text-red'>刪除</BaseButton>
            </Flex>
          </LineWrapper>)
      }
    </Wrapper>
  )
}

export default withRouter(BaseTable);