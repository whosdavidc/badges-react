import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNews.css';
import Badge from '../components/badge.js'

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
                    <div className="col">
                        <Badge firstName = "David" lastName = "Castro" jobTitle = "Frontend developer" instagram = "whosdavidc"/>
                    </div>
                </div>
                
                </div>                



            </div>
        )
    }
}


export default BadgeNew;