import React from 'react';

import { BurgerBtn } from './BurgerBtn';


export default function Nav (props) {
  // const [isActive,setIsActive] = useState(false);
    return (
     
      <nav className="navigation__nav" >        
        <BurgerBtn {...props} />        
      </nav>
    )
 
}
 

