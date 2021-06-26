import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render () {
        return(
            <div className="footer-container">
                <div className="footer-content">
                    <ul>
                        <li><Link to='/contact-me' className='nav-link footer-link'> Contact Me</Link></li>
                        <li><Link to='/about-me' className='nav-link footer-link'>About</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer