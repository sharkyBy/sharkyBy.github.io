import React from 'react';
import ContactInfoIcon from './ContactInfoIcon';

export default function ContactInfo(props) {
   
  return (
    <div className='contact__info'>
            <div>{props.tel}</div>
            <div>{props.mail}</div>
            <ContactInfoIcon contactInfoIcon={props.contactInfoIcon} />

          </div>
  )
}