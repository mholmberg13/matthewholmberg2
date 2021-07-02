import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div className="menu-wrapper">
                <header className="header">
                <h3><a href="#home" className="logo">Matthew Holmberg</a></h3>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to='/contact-me' className='nav-link ham-link'>Contact Me</Link></li>
                    <li><Link to='/about-me' className='nav-link ham-link'>About Me</Link></li>
                    <li><Link to='/3dprinting-prototyping' className='nav-link ham-link'>3D Printing and Prototyping</Link></li>
                    <li><Link to='/webdevelopment' className='nav-link ham-link'>Web Development</Link></li>
                    <li><Link to='/' className='nav-link ham-link'> Home </Link></li>
                </ul>
                </header>
            </div>
        )
    }
}

export default Header;