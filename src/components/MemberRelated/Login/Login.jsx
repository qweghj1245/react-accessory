import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from "react-alert";
import GoogleLogin from 'react-google-login';
import FormInput from '../../FormInput/FormInput';
import BaseButton from '../../BaseButton/BaseButton';

import { Wrapper, Texture, TextureBlack } from './Login.style';
import { Title } from '../../../assets/css/global.style';

import { loginStart, googleStart } from '../../../redux/user/user.action';

const MemberRelated = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.loginUser);
  const loginError = useSelector(state => state.user.loginError);
  const emailModel = useRef(null);
  const passwordModel = useRef(null);

  const responseSuccess = (googleUser) => {
    const id_token = googleUser.getAuthResponse().id_token;
    dispatch(googleStart(id_token));
  }
  const responseFailure = () => {
    alert.error('登入失敗');
  }

  const login = () => {
    dispatch(loginStart({
      email: emailModel.current.value,
      password: passwordModel.current.value,
    }));
  }

  useEffect(() => {
    if (loginError) {
      alert.error(loginError);
    }
    if (user) {
      emailModel.current.value = '';
      passwordModel.current.value = '';
      alert.success('登入成功！');
    }
  }, [loginError, user, alert]);

  return (
    <Wrapper>
      <Title mb={30} width={60}>登入</Title>
      <FormInput label='EMAIL' placeholder='請輸入會員EMAIL' model={emailModel} />
      <FormInput type='password' label='密碼' placeholder='請輸入會員密碼' mb='20' model={passwordModel} />
      <Texture>忘記密碼？</Texture>
      <BaseButton mb='30' padding='8px 48px' color='light-brown' onClick={login}>登入</BaseButton>
      <TextureBlack>———　or　———</TextureBlack>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_SIGN_IN_KEY}
        buttonText="Sign in with Google"
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        cookiePolicy={'single_host_origin'}
      />
    </Wrapper>
  )
}

export default MemberRelated;