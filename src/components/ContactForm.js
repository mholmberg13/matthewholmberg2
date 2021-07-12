import React from 'react';
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_b1s2gck', 'template_61l937c', e.target, 'user_lCeYG78ydUqqgpAd67FhC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
 }

class ContactForm extends React.Component {

    render() {
        return (
            <div className='form-container'>
                <form className='contact-form' onSubmit={sendEmail}>
                    <div className='form-group'>
                        <label className='contact-label'>Your Name:</label>
                        <input name='name' type='text' className='form-control' placeholder='Enter Your Name' />
                    </div>
                    <div className='form-group'>
                        <label className='contact-label'>Email address:</label>
                        <input name='email' type='email' className='form-control' placeholder='Enter Your Email' />
                    </div>
                    <div className="form-group">
                        <label className='contact-label'>Message or Request:</label>
                        <textarea name="message" className="form-control" placeholder="Enter Your Message"></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </form>
            </div>
        )
    }

}

export default ContactForm;