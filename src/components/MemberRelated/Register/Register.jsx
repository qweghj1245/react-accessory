import React, { useRef } from 'react';
import FormInput from '../../FormInput/FormInput';
import BaseButton from '../../BaseButton/BaseButton';

import { Wrapper } from './Register.style';
import { Title } from '../../../assets/css/global.style';

const MemberRelated = () => {
  const nameModel = useRef(null);
  const emailModel = useRef(null);
  const passwordModel = useRef(null);
  const checkPasswordModel = useRef(null);
  return (
    <Wrapper>
      <Title mb={30} width={60}>註冊</Title>
      <FormInput label='用戶名稱' placeholder='王小明' model={nameModel} />
      <FormInput label='EMAIL' placeholder='abc123@gmail.com' mb='20' model={emailModel} />
      <FormInput label='密碼' placeholder='請輸入6碼-12碼英數字' mb='20' model={passwordModel} />
      <FormInput label='確認密碼' placeholder='請再次輸入密碼' mb='20' model={checkPasswordModel} />
      <BaseButton padding='8px 48px' color='light-brown'>註冊</BaseButton>
    </Wrapper>
  )
}

export default MemberRelated;