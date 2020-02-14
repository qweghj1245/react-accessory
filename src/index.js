import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persist } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { positions, Provider as AlertProvider } from 'react-alert';
import Alert from './components/Alert/Alert';
import * as serviceWorker from './serviceWorker';

const options = {
  position: positions.TOP_CENTER,
  timeout: 4000,
}

ReactDOM.render(
  <AlertProvider template={Alert} {...options}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persist}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </AlertProvider>

  , document.getElementById('root'));

serviceWorker.register();
