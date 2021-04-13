import React from 'react';
import Header from './Header.js';
import Banner from './Banner.js';
import Main from './Main.js';
import Footer from './Footer.js';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;