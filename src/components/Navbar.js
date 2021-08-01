import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import "./styles/Navbar.css";
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo"src={logo} alt="Logo"/>
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-boldnp">Conf</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;