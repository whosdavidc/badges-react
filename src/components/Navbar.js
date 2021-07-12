import React from 'react';
import logo from '../images/logo.svg';
import "./styles/Navbar.css";
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo"src={logo} alt="Logo"/>
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-boldnp">Conf</span>
                </a>
            </div>
        </div>
    )
}

export default Navbar;