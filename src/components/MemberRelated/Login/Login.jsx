import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useAlert } from "react-alert";
import { selectLoginError } from '../../../redux/user/user.selector';
import GoogleLogin from 'react-google-login';
import FormInput from '../../FormInput/FormInput';
import BaseButton from '../../BaseButton/BaseButton';

import { Wrapper, Texture, TextureBlack } from './Login.style';
import { Title } from '../../../assets/css/global.style';

import { loginStart, googleStart } from '../../../redux/user/user.action';

const MemberRelated = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const loginError = useSelector(selectLoginError);
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
      email: emailModel.current,
      password: passwordModel.current,
    }));
    alert.info('等待登入中...');
  }

  useEffect(() => {
    if (loginError) {
      alert.error(loginError);
    }
  }, [loginError, alert]);

  return (
    <Wrapper>
      <Title mb={30} width={60}>登入</Title>
      <FormInput label='EMAIL' placeholder='請輸入會員EMAIL' inputVal={val => emailModel.current = val} />
      <FormInput type='password' label='密碼' placeholder='請輸入會員密碼' mb='20' inputVal={val => passwordModel.current = val} />
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

export default withRouter(MemberRelated);