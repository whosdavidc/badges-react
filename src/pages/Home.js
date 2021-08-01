import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from './../images/Home.png';
import './styles/Home.css';


const Home = () => {
    return (
        <React.Fragment>
            <div className='HomeContent'>
                <div>
                    <img src={HomeLogo} alt='Home logo' className='HomeLogo'/>
                </div>
                <div>
                    <h2>Stay Curious</h2>
                    <Link to='/badges'><h3 className='Button-badges'>Badges</h3></Link>

                    <Link to='/badges/new'><p>Register now</p></Link>
                </div>
            </div>    
        </React.Fragment>
    )
}

export default Home;