import React from 'react';
import Button from '../Button';


function AboutUsTextItem(props) {
  // debugger;



  return (
    
      <div id={`text_${props.index}`}  className='visible'>
        <h1>{props.text.title}</h1>
        <p>
          {props.text.p1}
        </p>
        <Button 
          classN={props.index !== 0 ? 'btn aboutUs__btn' : null}
          btnName={props.index !== 0 ? props.text.btnName : null}
          type='button'
        />
      </div>
    


  )
}

export default AboutUsTextItem;