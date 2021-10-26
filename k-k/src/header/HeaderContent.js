import React from 'react';
import PartnerLogo from './PartnerLogo';
import Arrow from '../Arrow';


export default function HeaderContent(props) {
  return (
    <div className="header__content">
      <img className='header__content-teamLogo' src = {props.data.companyLogo} alt='Team Logo'/>
      <PartnerLogo partner={props.data} />      
      <Arrow anchor='aboutUs'/>
      
    </div>
  )
}