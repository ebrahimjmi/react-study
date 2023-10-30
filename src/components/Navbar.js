import React from 'react'

const Navbar = () => {
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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar