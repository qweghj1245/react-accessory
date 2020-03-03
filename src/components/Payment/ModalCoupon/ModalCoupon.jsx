import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseModal from '../../BaseModal/BaseModal';
import BaseButton from '../../BaseButton/BaseButton';
import { Content, Inputs, Texture } from './ModalCoupon.style';
import { Title } from '../../../assets/css/global.style';
import { couponStart } from '../../../redux/cart/cart.action';
import { selectCarts } from '../../../redux/cart/cart.selector';
const ModalCoupon = ({ show, close, use }) => {
  //9a7oKfrK
  //25rowlPC
  const dispatch = useDispatch();
  const cart = useSelector(selectCarts);
  const couponModel = useRef(null);
  const useCoupon = () => {
    dispatch(couponStart({
      couponCode: couponModel.current,
      cartId: cart._id,
    }));
    use();
  }

  return (
    <BaseModal show={show} close={close}>
      <Content>
        <Title fz='20' mb='31' width='100'>輸入折扣碼</Title>
        <Inputs onChange={e => couponModel.current = e.target.value}/>
        <Texture>*一筆訂單僅能使用一組折扣碼</Texture>
        <BaseButton color='brown-yellow' padding='8px 40px' onClick={useCoupon}>使用折扣</BaseButton>
      </Content>
    </BaseModal>
  )
}

export default ModalCoupon;