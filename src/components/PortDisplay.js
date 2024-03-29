import React from 'react';
import Skills from './Skills.js'
import MedIcon from '../img/med3d-icon.png';
import PrintIcon from '../img/Printr2-icon.png';
import CryptoIcon from '../img/cryptotrack-icon.png';
import Cylog from '../img/cylog-icon.png';

class PortDisplay extends React.Component {

    state = {
        tab: 0
    }

    handleSkillChange = () => {
        if (this.state.tab === 0) {
            this.setState({tab: 1})
        } 
    }

    handlePortChange = () => {
        if (this.state.tab === 1) {
            this.setState({tab: 0})
        }
    }

    render () {
        return (
            <div className='port-display-container'>
                {this.state.tab === 0 ? 
                    <div className='tabs'>
                        <h3 onClick={this.handlePortChange} className='port-tab-active'>Portfolio</h3>
                        <hr/>
                        <h3 onClick={this.handleSkillChange} className='port-tab'>Skills</h3>
                        </div> : 
                        <div className='tabs'>
                        <h3 onClick={this.handlePortChange} className='port-tab'>Portfolio</h3>
                        <hr/>
                        <h3 onClick={this.handleSkillChange} className='port-tab-active'>Skills</h3>
                    </div>
                }
                
                {this.state.tab === 0 ? <div className='portfolio-display'>
                    <div className='port-card-container'>
                        <div className='port-card'>
                            <h2>Med-3D</h2>
                            <p>Med-3D is a 3D Printing service that provides underfunded medical centers to order medical supplies that is 3D printed by users with home printers.</p>
                            <a href='https://github.com/mholmberg13/med-3d'>VIEW GITHUB</a>
                            <div className="tools-used">
                                <h4>Built with:</h4>
                                <ul>
                                    <li>REACT</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Mongoose</li>
                                </ul>
                            </div>
                        </div>
                        <div className='icon-container'>
                                <img src={MedIcon} alt="Icon for Med 3D app."/>
                        </div>
                    </div>
                    <div className='port-card-container'>
                        <div className='port-card'>
                            <h2>Print-R2</h2>
                            <p>Print-R2 is a dashboard system that helps users with 3D-Printers streamline print-on-demand services. It's client side will feature both a web and mobile application.</p>
                            <a href='https://github.com/mholmberg13/printr2-client'>VIEW GITHUB</a>
                            <div className="tools-used">
                                <h4>Built with:</h4>
                                <ul>
                                    <li>REACT</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Mongoose</li>
                                </ul>
                            </div>
                        </div>
                        <div className='icon-container'>
                            <img src={PrintIcon} alt="Icon for Print R2 app." />
                        </div>
                    </div>
                    <div className='port-card-container'>
                        <div className='port-card'>
                            <h2>Crypto-Tracker</h2>
                            <p>Crypto-Tracker is a web application that allows users to track crypto-currency prices based off of their own personalized settings and preferences.</p>
                            <div className='port-link-container'>
                                <a href='https://cryptotrack.herokuapp.com/'>VIEW APPLICATION</a>
                                <a href='https://github.com/mholmberg13/cryptotracker-v2'>VIEW GITHUB</a>
                            </div>
                            <div className="tools-used">
                                <h4>Built with:</h4>
                                <ul>
                                    <li>REACT</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Mongoose</li>
                                </ul>
                            </div>
                        </div>
                        <div className='icon-container'>
                            <img src={CryptoIcon} alt="Icon for Cryptotracker app."/>
                        </div>
                    </div>
                    <div className='port-card-container-alt'>
                        <div className='port-card'>
                            <h2>Cy-Log</h2>
                            <p>Cy-Log is a web application that allows users to keep a detailed scientific journal that can be accessed from anywhere. Cy-Log will soon allow users to create a secure account and encrypt the users information.</p>
                            <div className='port-link-container'>
                                <a href='https://sci-port.herokuapp.com/'>VIEW APPLICATION</a>
                                <a href='https://github.com/mholmberg13/sci-log'>VIEW GITHUB</a>
                            </div>
                            <div className="tools-used">
                                <h4>Built with:</h4>
                                <ul>
                                    <li>REACT</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Mongoose</li>
                                </ul>
                            </div>
                        </div>
                        <div className='icon-container'>
                            <img src={Cylog} alt="Icon for Cylog app."/>
                        </div>
                    </div>
                </div> : <Skills/> }
                
            </div>
        )
    }
}

export default PortDisplay;