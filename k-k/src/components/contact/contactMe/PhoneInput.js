import React, { Fragment } from 'react';
import InputElement from 'react-input-mask';

export default function PhoneInput(props) {
  // let isValid = props.borderColor === true ? 'red':false;
  return (
    <Fragment>
      <InputElement
        placeholder="+375 (__) ___-__-__"
        mask="+375 (99) 999-99-99"
        required="required"
        type='tel'
        id='telephone'
        value={props.value.number}
        className={props.value.classN}
        onChange={props.onChange}
        style={{borderColor: props.borderColor}}
        
       
      />
    </Fragment>
  )
}
