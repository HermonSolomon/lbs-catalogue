import React from 'react'
import { Link} from 'react-router-dom'
import Logo from '../../assets/global/Avado-PrimaryLogo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className="logo">
          <Link to='/'><img src={Logo} alt="" /></Link>
        </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className='nav-link'>Home</Link>
            </li>
              <li className="nav-item">
              <Link to="/assets" className='nav-link'>Assets</Link>
            </li>
              <li className="nav-item">
              <Link to="/character-library" className='nav-link'>Character Library</Link>
            </li>
          </ul>
          <div className="hamburger">
            <FaBars />
          </div>
      </nav>
    </header>
  )
}

export default NavBar