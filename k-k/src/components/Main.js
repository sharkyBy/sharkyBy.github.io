import React from 'react';
import AboutUs from './aboutUs/AboutUs';
import Project from './projects/Project';
import Contact from './contact/contactMe/Contact';


export default function Main(props) {
  // debugger;
  return (
  <main className='main' >
    <div className='container'>
      <AboutUs {...props.data.aboutUs} />
      <Project {...props.data.project} />      
    </div>
    <Contact {...props.data.contact} />
  </main>
  )
}
