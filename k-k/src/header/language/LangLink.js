import React from 'react';


export default function LangLink(props) {
  // debugger;
  return (
    <div id={`${props.id}`}>
      <div        
        onClick={props.onClick}
        className={props.isActive === props.id ? 'active' : null}
      >
        {props.lang}
      </div>

    </div>
  )

}
