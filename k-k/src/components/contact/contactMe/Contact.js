import React, { useState } from 'react';
import Form from './Form';
import ContactInfo from './ContactInfo';
import validator from 'validator';
import {ajaxSend} from '../../../function/ajaxSend';



export default function Contact(props) {
  //  debugger;
  const [phone, setPhone] = useState({number:'', addClass:''});
  const [callMe, setCallMe] = useState({ color: '', id: '' });
  const [messageMe, setMessageMe] = useState({ color: '', id: '' });
  const [borderColor, setBorderColor] = useState({phoneLine:'', methodLine:''});
 
  const userContact = {
    phone: '',
    contactMe: '',
  }
  

  const handleContactMethodClick = (e) => {
    let val = e.currentTarget.id;
    switch (val) {
      case 'callMe':
        setCallMe({ color: 'rgb(47,128,237)', id: val });
        setMessageMe({ color: '', id: '' });
        break;
      case 'messageMe':
        setMessageMe({ color: 'rgb(47,128,237)', id: val });
        setCallMe({ color: '', id: '' });
        break;
      default:
        console.log("Error");
    };
    setBorderColor({phoneLine:'', methodLine:''})
    return val;
  };
  // console.log(callMe,messageMe);


// сгруппированы некоторые свойства для передачи на форму
  const contactMethod = [
    {
      id: 'callMe',
      color: callMe.color,
      handler: handleContactMethodClick,
      method: props.method[0]
    },
    {
      id: 'messageMe',
      color: messageMe.color,
      handler: handleContactMethodClick,
      method: props.method[1],

    },
  ];

// Обработчик поля ввода телефона
  const handlePhoneChange = e => { 
    
    let digit = e.target.value;
    setPhone({number:digit, classN:''});

    //подсвечиваем поле инпута при положительной проверке **********
    setBorderColor({phoneLine:'', methodLine:''});

    if (validator.isMobilePhone(digit.replace(/\D/g, ""), 'be-BY')) {
      
      setPhone({number:digit, classN: 'validSuccess'});
    } else {      
      
      setPhone({number:digit, classN: ''});    
    }

    // ************** конец блока подсветки поля ********************
  };

  
  const handleSubmit = (e) => {    
    e.preventDefault();    
    const val = (callMe.id !== messageMe.id && callMe.id !== '' ? callMe.id : messageMe.id);
    let phoneNumber = phone.number.replace(/\D/g, "");
    // console.log(phoneNumber);
    const success = props.alert.success;

    if (validator.isMobilePhone(phoneNumber, 'be-BY') && val !== '') {      
      userContact.phone = phone.number;
      userContact.contactMe = val;      
      callMe.id !== "" ? setCallMe({color:'', id:''}):setMessageMe({color:'', id:''});
      setPhone({number:'', classN:''});
      setBorderColor({phoneLine:'', methodLine:''});
      return ajaxSend(userContact, success);

    } else if (validator.isMobilePhone(phoneNumber, 'be-BY') && val === '') {
      alert(props.alert.noMethodSelected);
      setBorderColor({phoneLine:'', methodLine:'red'});
    } else {
      alert(props.alert.invalidPhoneNumber);
      setBorderColor({phoneLine:'red', methodLine:''});
    }

    return;
  };


  return (
    <div className="contact">
      <div className="contact__container">
        <Form
          formName={props.formName}
          contactMethod={contactMethod}
          btnName={props.btnName}
          before={props.before}
          value={phone}
          handlePhoneChange={handlePhoneChange}
          handleSubmit={handleSubmit}          
          className='btn contact__btn'
          borderColor={borderColor}
          
        />

        <ContactInfo
          tel={props.tel}
          mail={props.mail}
          contactInfoIcon={props.contactInfoIcon}
        />
      </div>
    </div>
  );

}

