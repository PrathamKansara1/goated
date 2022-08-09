import React from 'react'
import './BalanceBtn.css'

const BalanceBtn = ({value}) => {
  return (
    <button className='balance_btn'>
        {value}%
    </button>
  )
}

export default BalanceBtn