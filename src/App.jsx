//init
import React from 'react';
import { AppWrapper } from './App.style';
//plugin
import { Switch, Route } from 'react-router-dom';

//page
import routes from './router';
// import Home from './page/Home/Home';
// import Products from './page/Products/ProductsWrapper';
//component
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <AppWrapper>
      <Navbar />
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
      <Footer />
    </AppWrapper>
  );
}

export default App;
