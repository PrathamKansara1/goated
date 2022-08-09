import React from 'react'
import HomePageTitle from '../HomePageTitle/HomePageTitle'
import LightText from '../LightText'
import './AccountTitles.css'

const AccountTitles = (props) => {
  return (
    <div className="account_titles">
        <HomePageTitle title={props.whiteText} customStyle={{fontSize : "16px",fontWeight: "500"}} />
        <LightText lightText={props.lightText} customStyle={{fontSize : "14px"}} />
    </div>
  )
}

export default AccountTitles