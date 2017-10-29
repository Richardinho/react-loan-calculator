import {  createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import  reducer, { initialState } from './reducer.jsx';
import Calculator from './calculator.jsx';

let store = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById('app')
);
