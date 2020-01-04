import React, { useRef } from 'react';
import GoogleLogin from 'react-google-login';
import FormInput from '../../FormInput/FormInput';
import BaseButton from '../../BaseButton/BaseButton';

import { Wrapper, Texture, TextureBlack } from './Login.style';
import { Title } from '../../../assets/css/global.style';

const MemberRelated = () => {
  const emailModel = useRef(null);
  const passwordModel = useRef(null);

  const responseSuccess = (googleUser) => {
    const id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
  }
  const responseFailure = () => {
    console.log('Failed');
  }

  const login = () => {
    console.log(emailModel.current.value, passwordModel.current.value);
  }

  return (
    <Wrapper>
      <Title mb={30} width={60}>登入</Title>
      <FormInput label='EMAIL' placeholder='請輸入會員EMAIL' model={emailModel} />
      <FormInput label='密碼' placeholder='請輸入會員密碼' mb='20' model={passwordModel} />
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