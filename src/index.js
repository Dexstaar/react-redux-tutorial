import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';
import './index.css';

const INCREMENT = "INCREMENT";

function increase(diff) {
  return {
    type: INCREMENT,
    addBy: diff
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
