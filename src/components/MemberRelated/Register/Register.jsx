import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCreateUser, selectCreateError } from '../../../redux/user/user.selector';
import FormInput from '../../FormInput/FormInput';
import BaseButton from '../../BaseButton/BaseButton';
import { Wrapper, Login } from './Register.style';
import { Title } from '../../../assets/css/global.style';
import { useAlert } from "react-alert";
import { createUserStart } from '../../../redux/user/user.action';
const MemberRelated = ({ history, login }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const createUser = useSelector(selectCreateUser);
  const createError = useSelector(selectCreateError);
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
    if (!nameModel.current ||
      !emailModel.current ||
      !passwordModel.current ||
      !checkPasswordModel.current) {
      key['name'] = !nameModel.current ? '必填' : '';
      key['emial'] = !emailModel.current ? '必填' : '';
      key['password'] = !passwordModel.current ? '必填' : '';
      key['passwordConfirm'] = !checkPasswordModel.current ? '必填' : '';
      setError({
        ...error,
        ...key,
      });
    } else {
      dispatch(createUserStart({
        name: nameModel.current,
        email: emailModel.current,
        password: passwordModel.current,
        passwordConfirm: checkPasswordModel.current,
      }));
      alert.info('等待註冊中...');
    }
  }

  useEffect(() => {
    if (createError) {
      alert.error(createError);
    }
    if (createUser) {
      alert.removeAll();
      alert.success('註冊成功！');
      history.push('/');
    }
  }, [createUser, createError, alert, history]);
  return (
    <Wrapper>
      <Title mb={30} width={60}>註冊</Title>
      <FormInput error={error.name} label='用戶名稱' placeholder='王小明' inputVal={val => nameModel.current = val} />
      <FormInput error={error.emial} label='EMAIL' placeholder='abc123@gmail.com' mb='20' inputVal={val => emailModel.current = val} />
      <FormInput type='password' error={error.password} label='密碼' placeholder='請輸入6碼-12碼英數字' mb='20' inputVal={val => passwordModel.current = val} />
      <FormInput type='password' error={error.passwordConfirm} label='確認密碼' placeholder='請再次輸入密碼' mb='20' inputVal={val => checkPasswordModel.current = val} />
      <BaseButton padding='8px 48px' color='light-brown' onClick={register}>註冊</BaseButton>
      {
        window.innerWidth < 960 ? <Login onClick={login}>還沒有帳號？前往註冊</Login> : null
      }
    </Wrapper>
  )
}

export default withRouter(MemberRelated);