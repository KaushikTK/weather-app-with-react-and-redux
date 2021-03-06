import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import dataApp from './store/data/data';

const myStore = createStore(dataApp);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={myStore}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

