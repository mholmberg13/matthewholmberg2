import React from 'react';
import AboutImg from '../img/about-me2.jpg'


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
                    <p>I am a full stack web developer that has designed, built, and maintained web applications for a large number of clients in several different industries. I have a passion for web development, 3D printing technology, and robotics and I continue to learn everyday. I aim to make a difference in the world with my talents and skills. </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;