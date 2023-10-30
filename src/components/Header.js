import React from 'react'
import Navbar from './Navbar'
import SiteLogo from './SiteLogo'

const Header = ({cart, removeCartItem}) => {
  return (
    <header >
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <SiteLogo />
          <Navbar cart={cart} removeCartItem ={removeCartItem} />
        </div>
      </div>
    </header>
  )
}

export default Header