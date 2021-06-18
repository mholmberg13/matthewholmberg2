import React from 'react';
import Nav from './Nav.js'


class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h2 className="header-heading">Matthew Holmberg</h2>
                <Nav/>
            </div>
        )
    }
}

export default Header;