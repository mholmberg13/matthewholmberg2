import React from 'react';
import Nav from './Nav.js'


class Header extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <h1>Matthew Holmberg</h1>
            </div>
        )
    }
}

export default Header;