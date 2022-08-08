import React from 'react'
import { MdSportsBasketball } from 'react-icons/md'
import './IconsCard.css'
import Icons from '../Icons'
import {BiDotsVerticalRounded} from 'react-icons/bi'

const IconsCard = () => {
  return (
    <div className='icon_card'>
        <Icons icon = {<MdSportsBasketball/>}/>
        <Icons icon = {<BiDotsVerticalRounded/>}/>
    </div>
  )
}

export default IconsCard