import React from 'react'
import './MainContainer.css'

const MainContainer = ({...other}) => {
  return (
    <div className='main_container' {...other}></div>
  )
}

export default MainContainer