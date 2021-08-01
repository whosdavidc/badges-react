import React from 'react';
import logoTwitter from './../images/twitterLogo.png';
import './styles/BadgesList.css';

class BadgesList extends React.Component{
    render(){   
    return (
        <div>
            <ul className="list-unstyled">
                {this.props.badges.map((badge) =>{
                    return(                    
                            <li key={badge.id} className="card">
                                <div>
                                    <img src={badge.avatarUrl} className="photo" alt='Avatar'/>
                                </div>
                                <div>
                                    <p className='name'>
                                        {badge.firstName} {badge.lastName}<br/>
                                    </p>
                                    <p className='jobTitle'>
                                        {badge.jobTitle}
                                    </p>
                                    <p className='twitter'>
                                        <img src={logoTwitter} className='logoTwitter' alt='logoTwitter'/> {badge.twitter}
                                    </p>
                                    
                                </div>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
    }
}


export default BadgesList;