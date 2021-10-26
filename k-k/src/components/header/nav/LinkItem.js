import React from 'react';
import { NavLink } from 'react-router-dom';



export default function LinkIten(props) {

  return (
    <li className={props.isActive ? 'activeLink' : null} >
      <NavLink to={`/${props.linkName}`} onClick={props.onClick}>
        {props.pageName}
      </NavLink>
    </li>
  )

}