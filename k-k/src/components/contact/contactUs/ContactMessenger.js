import React from 'react';
import ContactMessengerIcon from './ContactMessengerIcon';

export default function ContactMessenger(props) {
  // debugger;
  // console.log(props);
  const icon = props.contactUs.map((item, index) => (
    <ContactMessengerIcon
      {...item}
      key={`icon_${index}`} 
     />
      ))

  return (
    <ul>
      {icon}
    </ul>
  )
}