import React from 'react'
import './Carousel.css'
import CarouselImg from '../../assets/HomePage/homeimg.jpg'

const Carousel = () => {
  return (
    <div className='carousel_img'>
        <img src={CarouselImg} alt="" />
    </div>
  )
}

export default Carousel