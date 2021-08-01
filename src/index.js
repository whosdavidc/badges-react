// const element = document.createElement('h1');

import React from 'react';
import ReactDOM from 'react-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App.js';

const container = document.getElementById('app');

ReactDOM.render(<App/>, container);