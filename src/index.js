// const element = document.createElement('h1');

import React from 'react';
import ReactDOM from 'react-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css'
import Badge from './components/badge.js';    


const container = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName = "David"
    lastName = "Castro" 
    avatarUrl = "https://www.gravatar.com/avatar/64b910466d3275688c175540ce067d10?d=identicon"
    jobTitle = "Frontend developer" 
    instagram = "whosdavidc"
    />, container);









