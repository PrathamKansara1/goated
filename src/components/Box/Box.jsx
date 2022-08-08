import React from 'react'
import './Box.css'

const Box = ({customStyle,...other}) => {
  return (
    <div className='box' style={customStyle} {...other}>

    </div>
  )
}

export default Box