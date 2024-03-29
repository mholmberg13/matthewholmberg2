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
                        <img src={BannerImage} alt="Laptop with code and orange graphic."/>
                        <div className='web-banner-content-container'>
                            <div className='web-content-inner'>
                                <h1 className='web-content-title'>Web Development</h1>
                                <h3>
                                    Bringing creativity and originality to your web applications and software.
                                </h3>
                                <div className='laptop-img'>
                                    <img src={Laptop} alt="Laptop icon."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='web-main'>
                    <div className='web-main-content-container'>
                        <div className='web-intro'>
                            <div className='intro-container'>
                                <div className='intro-heading'>
                                    <h2 className='port-name'>Matthew Holmberg</h2>
                                    <h1 className='port-heading'>Full Stack Web Developer</h1>
                                </div>
                                <hr></hr>
                            </div>
                            <div className='intro-images'>
                                <img className='port-intro-img' src={PortIntro} alt="Graphic of previous projects."/>
                                <div className='intro-summary'>
                                    <p><span id='big-a'>A</span>s an exprienced Full Stack Web Developer with a focus on JavaScript, I have designed, maintained, and built web applications for a number of clients in a variety of industries. Whether your website needs redesigned or your businiess needs a web application to streamline production, I can help.  </p>
                                </div>
                            </div>
                        </div>
                        <PortDisplay/>
                    </div>
                </div>

            </div>
        )
    }
}

export default WebDev;