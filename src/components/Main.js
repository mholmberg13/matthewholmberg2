import React from 'react';
import image1 from '../img/pexels-pixabay-270348.jpg';
import image2 from '../img/industry-3225119_1920.jpg';
import image3 from '../img/arduino-1050655_1920.jpg';

class Main extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <div className="main">
                    <div className="main-title">
                        <h1>Development Services</h1>
                        <h3>Orginality + Creativity</h3>
                    </div>
                    <div className="bio-outer">
                        <div className="bio-container">
                            <div className="main-bio" id="print-card">
                                <h2>3D Printing</h2>
                                <img src={image2} className="bio-pic" alt="3D-Printer printing object."/>
                                    <p>
                                        Do you have a 3D model that you would like printed? Just send us the file and we will print it for you at an affordable price! Do you need an object modeled? We can do that too! Just contact us with a description of what you need and we can give you a quote. We provide a number of materials and colors.
                                    </p>
                                    <a href="/3dprinting-prototyping">Learn More</a>
                            </div>
                            <div className="vert-line" id='vert-one'></div>
                            <div className="main-bio" id="web-card">
                                <h2 id="bio-web-title">Web Development</h2>
                                <img src={image1} className="web-bio-pic" alt="Code on computer screen."/>
                                    <p>
                                        We have designed, built, and maintained web applications, websites, and mobile applications for a variety of clients in a number of industries. Whether you are a small bussiness or a large company, we have the skills and rescources to solve your problem. 
                                    </p>
                                    <a href="/webdevelopment">Learn More</a>
                            </div>
                            <div className="vert-line" id='vert-two'></div>
                            <div className="main-bio" id="proto-card">
                                <h2>Prototyping</h2>
                                <img src={image3} className="bio-pic" alt="Microcontroller close up."/>
                                <p>
                                    Do you have an invention or an idea that you do not have the resources or know-how to build? We can help you design and build a prototype with full confidentiality. Specializing in small electronics, robotics, and mechanics, we have a team of experienced engineers ready to bring your idea to life. 
                                </p>
                                <a href="/3dprinting-prototyping">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;