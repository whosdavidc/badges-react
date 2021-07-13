import React from 'react';

import './styles/BadgeNews.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import Navbar from '../components/Navbar.js';


class BadgeNew extends React.Component{
    render() {
        return(    
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName = "David"lastName = "Castro"
                            avatarUrl = "https://www.gravatar.com/avatar/64b910466d3275688c175540ce067d10?d=identicon"
                            jobTitle = "Frontend developer"
                            instagram = "whosdavidc" />
                        </div> 
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>                
                </div>                



            </div>
        )
    }
}


export default BadgeNew;