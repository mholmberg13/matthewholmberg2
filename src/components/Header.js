import React from 'react';
import Nav from './Nav.js'


class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1 className="header-heading">Matthew Holmberg</h1>
                <Nav/>
            </div>
        )
    }
}

export default Header;