import React from 'react';
import BannerImage from '../img/Web-banner.png';
import Laptop from '../img/computer.png';
import Insomnia from '../img/insomnia-graphic.png';
import Brian from '../img/Brian.png';
import Crypto from '../img/crypto.png'

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
                                <div className='laptop-img'>
                                    <img src={Laptop}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='web-main'>
                    <div className='web-main-content-container'>
                        <div className='skills'>
                            <h1>Skills</h1>
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Node.js</li>
                                <li>Ruby on Rails</li>
                                <li>Git Management</li>
                                <li>Flexbox</li>
                            </ul>
                        </div>
                        <div className='portfolio'>
                            <h1>Portfolio</h1>
                            <div className='portfolio-images'>
                                <div className='insom-container'>
                                    <img className='insomnia-img' src={Insomnia}/>
                                </div>
                                <div className='brian-container'>
                                    <div className='brian-background'>
                                        <img className='brian-img' src={Brian}/>
                                    </div>
                                </div>
                                <div className='crypto-container'>
                                    <img className='crypto-img' src={Crypto}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default WebDev;