import React from 'react';
import Banner from './Banner.js';
import Main from './Main.js';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <Main/>
            </div>
        )
    }
}

export default HomePage;