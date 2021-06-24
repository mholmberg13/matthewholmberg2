import React from 'react';
import ContactForm from './ContactForm';


class ContactMe extends React.Component {
    render () {
        return (
            <div className='contact-me-container'>
                <div className='contact-me'>
                    <hr/>
                    <h1>Contact Me</h1>
                    <p>Send me a message or request for a project and I will get back to you as soon as possible.</p>
                    <ContactForm/>
                </div>
            </div>
        )
    }
}

export default ContactMe;