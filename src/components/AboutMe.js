import React from 'react';
import AboutImg from '../img/selfportait-0037.jpg'


class AboutMe extends React.Component {
    render () {
        return (
            <div className='about-me'>
                <div className='portrait-container'>
                    <div className='portrait-container-inner'>
                        <img src={AboutImg}/>
                    </div>
                </div>
                <div className='header-bio-container'>
                    <h1 className='about-heading'>About Me</h1>
                    <p>As a Full Stack Web Developer, 3D Printing Technician, and Small Electronics Specialist I have brought together a team to provide quality work to all of our clients while pushing the limits of technology. With our combined experience and skills we plan to research and develop new technologies and create a better world around us. </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;