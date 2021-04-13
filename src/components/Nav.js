import React from 'react';
import { Router, Route, Switch } from 'react-router';
import HomePage from './HomePage.js';
import WebDev from './WebDev.js';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <ul className="nav-ul">
                    <li>Home</li>
                    <li> <Link to='/webdevelopment'>Web Development</Link></li>
                    <li>3D Printing and Modeling</li>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        )
    }
}

export default Nav;