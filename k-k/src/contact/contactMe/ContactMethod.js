import React from 'react';


export default function ContactMethod(props) {
  // debugger;

  const choseContactMethod = props.contactMethod.map((item) => (
    <div
      className='contact__method_select'
      onClick={item.handler}
      style={{ color: item.color }}
      id={item.id}
      key={`method_${item.id}`}
    >
      {item.method}
    </div>

  ))

  return (
    <div
      className='contact__method'
      style={{ borderColor: props.borderColor }}
    >
      <span>{props.before}</span>
      {choseContactMethod}
    </div>
  )
}
