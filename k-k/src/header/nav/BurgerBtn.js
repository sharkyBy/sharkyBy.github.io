import React, { useState } from 'react';
import { ListLink } from './ListLink';

export function BurgerBtn(props) {
  const [isActive, setIsActive] = useState(false);
  // debugger;

  let activeBtn=()=> {  
    !isActive ? setIsActive({burger:'burgerBtn-active',menu:'navigation__link-active'}):setIsActive(false);   
    
  }

  return (
    <div className='burger' onClick={activeBtn}>
      <span className={`burgerBtn ${!isActive ? null:isActive.burger}`}></span>
      <ListLink {...props}  classN={!isActive ? null:isActive.menu} />
    </div>
  )
}
