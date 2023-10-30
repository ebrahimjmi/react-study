import React from 'react'

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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar