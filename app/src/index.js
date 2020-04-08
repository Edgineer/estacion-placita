import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const applyMiddleware = redux.applyMiddleware;


const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
