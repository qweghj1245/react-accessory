import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../../FormInput/FormInput';
import BaseButton from '../../BaseButton/BaseButton';
import { Wrapper } from './Register.style';
import { Title } from '../../../assets/css/global.style';

import { createUserStart } from '../../../redux/user/user.action';
const MemberRelated = () => {
  const dispatch = useDispatch();
  const nameModel = useRef(null);
  const emailModel = useRef(null);
  const passwordModel = useRef(null);
  const checkPasswordModel = useRef(null);
  const [error, setError] = useState({
    name: '',
    emial: '',
    password: '',
    passwordConfirm: '',
  });
  const register = () => {
    let key = {};
    if (!error.name || !error.emial || !error.passwordConfirm || !error.password) {
      key['name'] = !nameModel.current.value ? '必填' : '';
      key['emial'] = !emailModel.current.value ? '必填' : '';
      key['password'] = !passwordModel.current.value ? '必填' : '';
      key['passwordConfirm'] = !checkPasswordModel.current.value ? '必填' : '';
      setError({
        ...error,
        ...key,
      });
      return;
    }
    dispatch(createUserStart({
      name: nameModel.current.value,
      email: emailModel.current.value,
      password: passwordModel.current.value,
      passwordConfirm: checkPasswordModel.current.value,
    }));
  }

  return (
    <Wrapper>
      <Title mb={30} width={60}>註冊</Title>
      <FormInput error={error.name} label='用戶名稱' placeholder='王小明' model={nameModel} />
      <FormInput error={error.emial} label='EMAIL' placeholder='abc123@gmail.com' mb='20' model={emailModel} />
      <FormInput type='password' error={error.password} label='密碼' placeholder='請輸入6碼-12碼英數字' mb='20' model={passwordModel} />
      <FormInput type='password' error={error.passwordConfirm} label='確認密碼' placeholder='請再次輸入密碼' mb='20' model={checkPasswordModel} />
      <BaseButton padding='8px 48px' color='light-brown' onClick={() => register()}>註冊</BaseButton>
    </Wrapper>
  )
}

export default MemberRelated;