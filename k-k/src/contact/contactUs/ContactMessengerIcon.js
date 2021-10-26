import React from 'react';

export default function ContactMessengerIcon(props) {
  // console.log(props)
  // debugger;
  return (
    <li >
      <a href={props.link} target='_blank' rel="noopener noreferrer" >
        <img src={props.src} alt={props.name} />
      </a>
    </li>
  )
}