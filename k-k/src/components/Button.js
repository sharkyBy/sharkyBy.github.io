import React from 'react';

export default function Button(props) {

  return (
    <button
      type={props.type}
      className={props.classN}
      onClick={props.onClick}
      form={props.form}
    >
      {props.btnName}
    </button>
  )
}
