import React from 'react';
import HeaderContent from './HeaderContent';
import ContactUsForm from '../contact/contactUs/ContactUsFortm';


export default function Header(props) {
  // debugger;
  
  return (

    <header className="header">
      <div className='header__container' >        
        <HeaderContent data={props.data.content} />
        <ContactUsForm contactUs={props.contactUs} />
      </div>

    </header>

  )

}


