import React from 'react';

import './styles/BadgeNews.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import Navbar from '../components/Navbar.js';


class BadgeNew extends React.Component{
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        instagram: '' //With this definition we avoid that the ReacDOM detect the inputs as uncontrolled at the beginning.
    }}

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    }

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
                            <Badge 
                            firstName = {this.state.form.firstName}
                            lastName = {this.state.form.lastName}
                            avatarUrl = "https://www.gravatar.com/avatar/64b910466d3275688c175540ce067d10?d=identicon"
                            jobTitle = {this.state.form.jobTitle}
                            email = {this.state.form.email}
                            instagram = {this.state.form.instagram} />
                        </div> 
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>                
                </div>                



            </div>
        )
    }
}


export default BadgeNew;