import React from 'react';

export default function ContactInfoIcon(props) {
  let contactInfoIcon = props.contactInfoIcon.map(item => <img src={item.src} alt={item.name} key={item.name} />)
  return (
    <div className='contact__info_icon'>
      {contactInfoIcon}
    </div>
  )
}