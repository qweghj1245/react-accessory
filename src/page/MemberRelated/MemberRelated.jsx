import React from 'react';

import Login from '../../components/MemberRelated/Login/Login';
import Register from '../../components/MemberRelated/Register/Register';

import { Wrapper } from './MemberRelated.style';

const MemberRelated = () => {
  return (
    <Wrapper>
      <Login />
      <Register />
    </Wrapper>
  )
}

export default MemberRelated;