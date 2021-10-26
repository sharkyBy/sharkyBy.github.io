import React from 'react';
import AboutUsScopes from './AboutUsScopes';

export default function AboutUsCarousel(props) { 

  let carousel = props.imgSrc.map((item,index) => 
  <AboutUsScopes 
    imgSrc={item} 
    key ={`img_${index}`} 
    alt={`img_${index}`}
    id={`pict_${index}`}
  />
  )
  return(
    <ul id='carousel'>
      {carousel}
    </ul>

  )
}