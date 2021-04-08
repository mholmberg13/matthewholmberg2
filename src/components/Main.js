import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Web Development and Services</h1>
                <div className="bio-outer">
                    <div className="bio-container">
                        <div className="main-bio">
                            <h3>3D Printing</h3>
                                <p>
                                    Do you have a 3D model that you would like printed? Just send us the file and we will print it for you at an affordable price! Do you need an object modeled? We can do that too! Just contact us with a description of what you need and we can give you a quote. We provide a number of materials and colors.
                                </p>
                                <a href="/">Learn More</a>
                            </div>
                        <div className="vert-line"></div>
                        <div className="main-bio">
                            <h2>Web Development</h2>
                                <p>
                                    We have designed, built, and maintained web applications, websites, and mobile applications for a variety of clients in a number of industries. We bring originality and creativity to every project. Whether you are a small bussiness or a larger company, we have the skills and rescources to solve your problem.  
                                </p>
                                <a href="/">Learn More</a>
                            </div>
                        <div className="vert-line"></div>
                        <div className="main-bio">
                            <h3>Prototyping</h3>
                            <p>
                                Do you have an invention or an idea that you dont have the resources or know-how to build? We can help you design an build a prototype with full confidentiality. Specializing in small electronics, robotics, and mechanics, we have a team of experienced engineers ready to bring your idea to life. 
                            </p>
                            <a href="/">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;