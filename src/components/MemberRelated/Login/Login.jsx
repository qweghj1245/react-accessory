import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useAlert } from "react-alert";
import { selectLoginError } from '../../../redux/user/user.selector';
import GoogleLogin from 'react-google-login';
import FormInput from '../../FormInput/FormInput';
import BaseButton from '../../BaseButton/BaseButton';

import { Wrapper, TextureBlack, Register, Form } from './Login.style';
import { Title } from '../../../assets/css/global.style';

import { loginStart, googleStart } from '../../../redux/user/user.action';

const Login = ({ register }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const loginError = useSelector(selectLoginError);
  const emailModel = useRef(null);
  const passwordModel = useRef(null);

  const responseSuccess = (googleUser) => {
    const id_token = googleUser.getAuthResponse().id_token;
    dispatch(googleStart(id_token));
  }

  const login = (event) => {
    event.preventDefault();
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
      <Form onSubmit={login}>
        <FormInput label='EMAIL' placeholder='請輸入會員EMAIL' inputVal={val => emailModel.current = val} />
        <FormInput type='password' label='密碼' placeholder='請輸入會員密碼' mb='20' inputVal={val => passwordModel.current = val} />
        <input type="submit" value="Submit" style={{ opacity: 0, visibility: 'hidden'}}/>
        <BaseButton mb='30' padding='8px 48px' color='light-brown' onClick={login}>登入</BaseButton>
      </Form>
      {/* <Texture>忘記密碼？</Texture> */}
      <TextureBlack>———　or　———</TextureBlack>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_SIGN_IN_KEY}
        buttonText="Sign in with Google"
        onSuccess={responseSuccess}
        cookiePolicy={'single_host_origin'}
      />
      {
        window.innerWidth < 960 ? <Register onClick={register}>還沒有帳號？前往註冊</Register> : null
      }
    </Wrapper>
  )
}

export default withRouter(Login);