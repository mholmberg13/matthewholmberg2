import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import WebDev from './WebDev.js';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <ul className="nav-ul">
                    <li> <Link to='/' className='nav-link'> Home </Link> </li>
                    <li> <Link to='/webdevelopment' className='nav-link'>Web Development</Link></li>
                    <li> <Link to='/3dprinting-prototyping' className='nav-link'>3D Printing and Prototyping</Link></li>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        )
    }
}

export default Nav;