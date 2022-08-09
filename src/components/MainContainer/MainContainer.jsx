import React from 'react'
import './MainContainer.css'

const MainContainer = ({customStyle,...other}) => {
  return (
    <div className='main_container' {...other} style={customStyle}></div>
  )
}

export default MainContainer