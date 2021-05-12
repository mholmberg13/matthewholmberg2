import React from 'react';

class PortDisplay extends React.Component {
    render () {
        return (
            <div className='port-display-container'>
                <div className='portfolio-display'>
                    <div className='port-card-container'>
                        <div className='port-card'>
                            <h2>Med-3D</h2>
                            <p>Med-3D is a 3D Printing service that provides underfunded medical centers to order medical supplies that is 3D printed by users with home printers.</p>
                            <a href='#'>See Github</a>
                            <div className="tools-used">
                                <ul>
                                    <li>REACT</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Mongoose</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='port-card-container'>
                        <div className='port-card'>
                            <h2>Print-R2</h2>
                            <p>Print-R2 is a dashboard system that helps users with 3D-Printers streamline print-on-demand services. It's client side will feature both a web and mobile application.</p>
                            <a href='#'>See Github</a>
                            <div className="tools-used">
                                <ul>
                                    <li>REACT</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Mongoose</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='port-card-container'>
                        <div className='port-card'>
                            <h2>Crypto-Tracker</h2>
                            <p>Crypto-Tracker is a web application that allows users to track crypto-currency prices based off of their own personalized settings and preferences.</p>
                            <a href='#'>See Github</a>
                            <div className="tools-used">
                                <ul>
                                    <li>REACT</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Mongoose</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='port-card-container'>
                        <div className='port-card'>
                            <h2>Cy-Log</h2>
                            <p>Cy-Log is a web application that allows users to keep a detailed scientific journal that can be accessed from anywhere. Cy-Log will soon allow users to create a secure account and encrypt the users information.</p>
                            <a href='#'>See Github</a>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default PortDisplay;