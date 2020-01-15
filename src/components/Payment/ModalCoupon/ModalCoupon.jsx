import React from 'react';
import BaseModal from '../../BaseModal/BaseModal';
import BaseButton from '../../BaseButton/BaseButton';

import { Content, Inputs, Texture } from './ModalCoupon.style';
import { Title } from '../../../assets/css/global.style';

const ModalCoupon = ({ show, close, use }) => {
  return (
    <BaseModal show={show} close={close}>
      <Content>
        <Title fz='20' mb='31' width='100'>輸入折扣碼</Title>
        <Inputs />
        <Texture>*一筆訂單僅能使用一組折扣碼</Texture>
        <BaseButton color='brown-yellow' padding='8px 40px' onClick={use}>使用折扣</BaseButton>
      </Content>
    </BaseModal>
  )
}

export default ModalCoupon;