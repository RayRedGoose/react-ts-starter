import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from 'store';
import App from './ConnectedApp';

const AppWrapper: JSX.Element = (
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

export default AppWrapper;
