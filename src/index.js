import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app'
import AppProvider from './components/appContext';
import 'react-app-polyfill/ie11';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

