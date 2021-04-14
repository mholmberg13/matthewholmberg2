import React from 'react';
import BannerImage from '../img/Web-banner.png';
import Laptop from '../img/computer.png';

class WebDev extends React.Component {
    render () {
        return (
            <div>
                <div className='web-banner-container'>
                    <div className='web-banner-inner'>
                        <img src={BannerImage}/>
                        <div className='web-banner-content-container'>
                            <div className='web-content-inner'>
                                <h1 className='web-content-title'>Web Development</h1>
                                <h3>
                                    Bringing creativity and originality to your web applications and software.
                                </h3>
                            </div>
                            <div className='laptop-img'>
                                <img src={Laptop}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WebDev;