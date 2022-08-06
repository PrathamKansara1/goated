import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Homepage.css'

const Homepage = () => {
  return (
    <>
    <Navbar main_pages="true" />
    <div className="side_content">
      <Sidebar/>
      {/* <div className="temp">
        Hello
      </div> */}
    </div>
    </>
  )
}

export default Homepage