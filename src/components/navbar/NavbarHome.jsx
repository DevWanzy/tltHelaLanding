import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import Logo1 from '../../assets/ministry.png'
import Logo2 from '../../assets/talanta-logo.png'

import './navbar.css'

const NavItem = ({ to, text }) => (
  <Link to={to} className='link'>
    <span>{text}</span>
    <FaChevronDown
      style={{ fontSize: '10px', color: '#333', marginLeft: '10px' }}
    />
  </Link>
)

const NavbarHome = () => {
  return (
    <div className=' nav1'>
      <div className='logo-container'>
        <img src={Logo1} alt='Logo 1' className='logo' />
        <img src={Logo2} alt='Logo 2' className='logo' />
      </div>
      <div className='nav-items'>
        {/* <Link to='/' className='link'>
          <span>Home</span>
        </Link> */}
        <NavItem to='#talents' text='For Talents' />

        <NavItem to='#events' text='Events' />
        <NavItem to='#learning' text='Learning Centers' />
        <Link to='/about' className='link'>
          <span>About</span>
        </Link>
        <Link to='/partners' className='link'>
          <span>Partners</span>
        </Link>
      </div>

      {/* <div className='match'>
        <h4>
          <span>live</span>MATCH UPDATE
        </h4>
        <div className='match-logo'></div>
      </div> */}
      <div className='user'>
        <button className='btn'>Login</button>
        <button className='btn sign'>Register</button>
      </div>
    </div>
  )
}

export default NavbarHome
