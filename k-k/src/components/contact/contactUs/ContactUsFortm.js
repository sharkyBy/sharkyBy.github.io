import React from 'react';
import ContactMessenger from './ContactMessenger';

export default function ContactUsForm(props) {
  return (
    <div className="contactUsModal">
      <span className="close"></span>
      <ContactMessenger {...props}/>
    </div>
  )
}
