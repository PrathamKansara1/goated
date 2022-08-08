import React from 'react'
import './CardButton.css'

const CardButton = (props) => {
  return (
    <button className='card_description_button'>
        {props.value}
    </button>
  )
}

export default CardButton