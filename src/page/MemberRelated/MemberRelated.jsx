import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../../components/MemberRelated/Login/Login';
import Register from '../../components/MemberRelated/Register/Register';

import { Wrapper } from './MemberRelated.style';

const isWeb = window.innerWidth > 960;
const MemberRelated = () => {
  const loginUser = useSelector(state => state.user.loginUser);
  const [typeRelated, setTypeRelated] = useState('login');
  return (
    <React.Fragment>
      {
        loginUser ?
          <Redirect to={{ pathname: '/', state: { reload: true } }} /> :
          <Wrapper>
            {
              typeRelated === 'login' && !isWeb ? <Login register={() => setTypeRelated('register')}/> :
                typeRelated === 'register' && !isWeb ? <Register login={() => setTypeRelated('login')}/> :
                  <React.Fragment>
                    <Login />
                    <Register />
                  </React.Fragment>
            }
          </Wrapper>
      }
    </React.Fragment>

  )
}

export default MemberRelated;