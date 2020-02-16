//init
import React, { useEffect, useCallback } from 'react';
import { useAlert } from "react-alert";
import { getLocal } from './lib/localStorage';
import { selectCreateUser, selectLoginUser } from './redux/user/user.selector';
import { AppWrapper } from './App.style';
import { useDispatch, useSelector } from 'react-redux';
import { getUserStart } from './redux/user/user.action';
//plugin
import { Switch, Route, withRouter } from 'react-router-dom';
//page
import routes from './router';
//component
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = ({ location }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const loginUser = useSelector(selectLoginUser);
  const createUser = useSelector(selectCreateUser);
  const removeAlert = useCallback(() => alert.removeAll(), [alert]);

  useEffect(() => {
    if (getLocal('Authorization')&&!loginUser&&!createUser) {
      dispatch(getUserStart());
    }
    removeAlert();
  }, [dispatch, removeAlert, loginUser, createUser]);

  return (
    <AppWrapper location={location}>
      {
        location.pathname.indexOf('backstage') > -1 ? null : <Navbar />
      }
      <Switch>
        {
          routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => <route.component routes={route.children} title={route.headerTitle} {...props} config={route} />} />
          ))
        }
      </Switch>
      {
        location.pathname.indexOf('backstage') > -1 ? null : <Footer />
      }
    </AppWrapper>
  );
}

export default withRouter(App);
