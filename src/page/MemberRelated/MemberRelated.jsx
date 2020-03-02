import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../../components/MemberRelated/Login/Login';
import Register from '../../components/MemberRelated/Register/Register';

import { Wrapper } from './MemberRelated.style';

const MemberRelated = () => {
  const loginUser = useSelector(state => state.user.loginUser);
  return (
    <React.Fragment>
      {
        loginUser ?
          <Redirect to={{ pathname: '/', state: { reload: true } }} /> :
          <Wrapper>
            <Login />
            <Register />
          </Wrapper>
      }
    </React.Fragment>

  )
}

export default MemberRelated;