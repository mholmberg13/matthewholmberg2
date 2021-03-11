import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li>Home</li>
                    <li>Web Development</li>
                    <li>3D Printing and Modeling</li>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        )
    }
}

export default Nav;