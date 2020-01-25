//init
import React from 'react';
import { AppWrapper } from './App.style';
//plugin
import { Switch, Route, withRouter } from 'react-router-dom';

//page
import routes from './router';
// import Home from './page/Home/Home';
// import Products from './page/Products/ProductsWrapper';
//component
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = ({ location }) => {
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
