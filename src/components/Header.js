import React from 'react'
import Navbar from './Navbar'
import SiteLogo from './SiteLogo'

const Header = () => {
  return (
    <header >
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <SiteLogo />
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header