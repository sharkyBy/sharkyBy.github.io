import React from 'react';
import Card from './Card';

export default function ListCards(props) {
  // debugger;
  // console.log(props)

  let listcards = props.cards.map((item, index) => (
  <Card cards={item} key={`item_${index}`} />
  ))

  return (
    <div className='project__container'>
       {listcards}
      </div>
  )
}
