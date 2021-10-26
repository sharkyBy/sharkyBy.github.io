import React from 'react';
import LinkItem from './LinkItem';



export  const ListLink = (props) => {
  // debugger;
  const listItem = props.page.map((item,index) => (
    
    <LinkItem
      linkName={item}
      key={item}
      pageName={props.pageName[index]}
      isActive={props.activePage.includes(item)?props.activePage:null}
      onClick={() => props.handleLinkClick(item)}
      // onClick={props.onClick}
      
    />
  ))

  return (
    <ul className={`navigation__link ${props.classN}`}>    
      {listItem}
    </ul>
  )
}

export default ListLink;