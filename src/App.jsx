//init
import React from 'react';
import { AppWrapper } from './App.style';
//plugin
import { Switch, Route } from 'react-router-dom';

//page
import Home from './page/Home/Home';

//component
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}

export default App;
