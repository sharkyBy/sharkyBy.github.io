import React from 'react';
import Nav from '../header/nav/Nav';
import Lang from '../header/language/Lang';
import Button from '../Button';
import { contactUsClick } from '../../function/contactUsClick';



export default function Navigation(props) {
 
  // debugger;
  return (
    <div className="navigation" id='navigation'>
      <div className='navigation__container'>
        <Nav
          pageName={props.pageName}
          page={props.page}
          activePage={props.activePage}
          handleLinkClick={props.handleLinkClick}
        />

        <Button 
        btnName={props.btnName} 
        type='button' 
        classN='btn navigation__btn' 
        onClick={contactUsClick}           
        />

        <Lang 
          lang={props.lang}
          handleUserLang={props.handleUserLang}
          language={props.language}
           />

        
      </div>      
    </div>
  )
}
