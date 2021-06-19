import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import WebDev from './WebDev.js';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <ul className="nav-ul">
                    <li> <Link to='/' className='nav-link ham-link'> Home </Link> </li>
                    <li> <Link to='/webdevelopment' className='nav-link ham-link'>Web Development</Link></li>
                    <li> <Link to='/3dprinting-prototyping' className='nav-link ham-link'>3D Printing and Prototyping</Link></li>
                    <li><Link to='/about-me' className='nav-link ham-link'>About Me</Link></li>
                    <li><Link to='/contact-me' className='nav-link ham-link'>Contact Me</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;