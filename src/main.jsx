import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import store from './states/index.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <HomePage />
      </StrictMode>,
    </BrowserRouter>
  </Provider>
);
