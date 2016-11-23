import { AppContainer } from 'react-hot-loader'; // required  
import React from 'react';  
import {render} from 'react-dom';  
import App from './containers/App.jsx'; // App

import css from './../stylesheets/main.scss';

renderWithHotReload(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App.jsx', () => {
    const App = require('./containers/App.jsx').default;
    renderWithHotReload(App);
  });
}

function renderWithHotReload(App) {
  render (
      <App />
    , document.getElementById('starter')
  );
}