import React from 'react';


export default function Arrow(props) {
  // debugger;

  return (
    <div className='arrow' style={props.margin}>

      <a href={`#${props.anchor}`}>
        <div style={props.border}></div>
      </a>

    </div>

  )
}
