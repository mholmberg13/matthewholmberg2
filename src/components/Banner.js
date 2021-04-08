import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../img/pexels-burst-374016.jpg';
import image2 from '../img/pexels-negative-space-160107.jpg';
import image3 from '../img/pexels-picjumbocom-196644.jpg';
import image4 from '../img/pexels-picjumbocom-196645.jpg';

class Banner extends React.Component {
    render() {
        return(
            <div>
                <AliceCarousel autoPlay autoPlayInterval="3500" infinite={true} disableButtonsControls={true}>
                    <img src={image1} className="sliderimg" alt="laptop"/>
                    <img src={image2} className="sliderimg" alt="laptop"/>
                    <img src={image3} className="sliderimg" alt="wireframe"/>
                    <img src={image4} className="sliderimg" alt="wireframe"/>
                </AliceCarousel>
            </div>
        )
    }
}

export default Banner;