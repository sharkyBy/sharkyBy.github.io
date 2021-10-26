import React from 'react';

import AboutUsTextItem from './AboutUsTextItem';

function AboutUsText(props) {
  // debugger;
  let textBlock = props.text.map((item, index) => (
    <AboutUsTextItem
      text={item}
      index={index}
      key={`aboutUs_${index}`}
    />)
  )
  return (
   
      <div className='aboutUs__text_wrapper'>
        {textBlock}
    </div>

  )
}

export default AboutUsText;
