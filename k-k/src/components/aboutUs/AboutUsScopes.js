import React from 'react';


// window.addEventListener('scroll',position);

export default function AboutUsScopes(props) {
  // debugger;

  return (
    <li id={props.id}>
      <img src={props.imgSrc} alt={props.alt}/>
    </li>
  )
}
