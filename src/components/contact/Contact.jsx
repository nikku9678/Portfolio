// src/ContactPage.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id='contact'>
      <div className="left-side">
        <div className='contact-id'>
        <img src="github.png" alt="Logo 1" className="logo" />
        <span>Github</span>
        </div>
        <div className='contact-id'>
        <img src="insta.png" alt="Logo 2" className="logo" />
        <span>Instagram</span>
        </div>
        <div className='contact-id'>
        <img src="linkedin.png" alt="Logo 3" className="logo" />
        <span>Linkedin</span>
        </div>
        
        
      </div>
      <div className="right-side">
        <h2>Lets Connect us</h2>
        <p className="paragraph">
          +91 7631770210
        </p>
        <p className="paragraph">
          kumarnikku300@gmail.com
        </p>
        <p className="paragraph">
          1st Floor, 1st Main Road, 1st Cross
        </p>
      </div>
    </div>
  );
};

export default Contact;
