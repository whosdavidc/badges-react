import React from 'react';
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
                                    <img src={badge.avatarUrl} className="photo"/>
                                </div>
                                <p>
                                    {badge.firstName} {badge.lastName}
                                </p>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
    }
}


export default BadgesList;