import React from 'react';
import BannerImage from '../img/Web-banner.png';
import Laptop from '../img/computer.png';
import PortIntro from '../img/port-intro.png';
import PortDisplay from './PortDisplay.js';

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
                        <div className='web-intro'>
                            <div className='intro-summary-container'>
                                <h1 className='port-name'>Matthew Holmberg</h1>
                                <h4>Full Stack Web Developer</h4>
                                <div className='intro-summary'>
                                    <p>As an exprienced Full Stack Web Developer with a focus on JavaScript, I have designed, maintained, and built web applications for a number of clients in a variety of industries. Whether your website needs redesigned or your businiess needs a web application to help streamline production, I can help.  </p>
                                </div>
                            </div>
                            <div className='intro-images'>
                                <img className='port-intro-img' src={PortIntro}/>
                            </div>
                        </div>
                        <PortDisplay/>
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
                    </div>
                </div>

            </div>
        )
    }
}

export default WebDev;