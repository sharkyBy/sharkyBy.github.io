import React, { Fragment } from 'react';

import Header from './header/Header';
import Main from './Main';

export default function Mainpage(props) {
  // debugger;

  return (
    <Fragment>
      <Header
        data={props.header}
        contactUs={props.main.contact.messenger}
      />

      <Main data={props.main} />
    </Fragment>

  )
}
