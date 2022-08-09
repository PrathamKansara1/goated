import React from 'react'
import HomePageTitle from '../HomePageTitle'
import LightText from '../LightText'

const BetFormCompo = ({name,value}) => {
  return (
    <div className='bet_form_compo'>
        <LightText lightText={name} customStyle={{fontSize:"8px",textTransform:"uppercase", fontWeight:"600"}} />
        <HomePageTitle title={value} customStyle={{fontSize:"15px",fontWeight:"600"}} />
    </div>
  )
}

export default BetFormCompo