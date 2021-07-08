import React from 'react';
import  '../styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
      // const name = 'David';
      // const lastName = 'Castro';

      return (
        <div className="Badge">
          <div className="Badge__header">
            <img src={confLogo} alt="Logo de la conferencia" />
          </div>
  
          <div className="Badge__section-name">
            <img
              className="Badge__avatar"
              src="https://www.gravatar.com/avatar/64b910466d3275688c175540ce067d10?d=identicon"
              alt="Avatar"
            />
            <h1>
              {this.props.firstName} <br /> {this.props.lastName}
            </h1>
          </div>
  
          <div className="Badge__section-info">
            <h3>{this.props.jobTitle}</h3>
            <div>{this.props.instagram}</div>
          </div>
  
          <div className="Badge__footer">#platziconf</div>
        </div>
      );
    }
}


    export default Badge;
