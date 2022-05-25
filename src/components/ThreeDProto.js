import React from 'react';
import PrintBanner from '../img/3d-printer-3311587.png'

class ThreeDProto extends React.Component {
    render () {
        return (
            <div className='print-proto'>
                <h1 className='print-proto-heading'>3D Printing and Prototyping</h1>
                <div className='print-proto-main'>
                    <h3> - Coming July 2022 - </h3>
                    <div className='print-banner-container'>
                        <img src={PrintBanner} alt="3D Printer icon."/>
                    </div>
                    <div className='print-proto-bio'>
                        <p>Starting July 2022 we will be taking orders and requests for 3D printing on demand, 3D modeling, and prototyping through our custom designed and built ordering service. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThreeDProto;