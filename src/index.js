// const element = document.createElement('h1');

import React from 'react';
import ReactDOM from 'react-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Badge from './components/Badge';
import './global.css'
import BadgeNew from './pages/BadgeNew.js';    
import Badges from './pages/Badges.js';

const container = document.getElementById('app');

ReactDOM.render(<Badges/>, container);