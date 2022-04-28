import React from 'react';


export default function PartnerLogo(props) {
  return (
    <div className="header__content-partnerLogo">
      <a href={props.partner.partnerLink} target ='_blank' rel="noopener noreferrer">
        <img src={props.partner.partnerLogo} alt="Partner logo" />
        <span >{props.partner.partnerText}</span>
      </a>
    </div>
  )
}
