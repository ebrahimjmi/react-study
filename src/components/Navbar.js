import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({cart}) => {
  return (
    <nav>
      <div className='container'>
        <ul className='d-flex'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>

          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact us</a>
          </li>
          <li>
            <a href='#'>Cart<sup className='text-dark'>{cart?.length > 0 ? cart.length: 0}</sup></a>
          </li>
          <li>
            <Link to ='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar