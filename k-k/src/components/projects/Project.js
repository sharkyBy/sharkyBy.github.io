import React from 'react';
import ListCards from './ListCards';
import ScrollIndicator from './ScrollIndicator';

export default function Project(props) {
  // debugger;
  // console.log(`project props: ${props}`)
  return (
    <div className='project' id='project'>
      <ScrollIndicator />
      <ListCards {...props} />
    </div>
  )
}





