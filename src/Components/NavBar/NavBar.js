import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/global/Avado-PrimaryLogo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false)
  return (
    <header>
      <nav className='navbar'>
        <div className="logo">
          <NavLink to='/'><img src={Logo} alt="" /></NavLink>
        </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
            </li>
              <li className="nav-item">
              <NavLink to="/assets" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Assets</NavLink>
            </li>
              <li className="nav-item">
              <NavLink to="/character-library" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Character Library</NavLink>
            </li>
          </ul>
          <button className="hamburger">
              {showMenu ? <FaTimes onClick={() => setShowMenu(!showMenu)} />  : <FaBars onClick={() => setShowMenu(!showMenu)}/> }
          </button>

          <div className="mobile-nav"  id={showMenu ? "expanded" : ""}>
            <li className="nav-item">
              <Link to="/" className='nav-link'>Home</Link>
            </li>
              <li className="nav-item">
              <Link to="/assets" className='nav-link'>Assets</Link>
            </li>
              <li className="nav-item">
              <Link to="/character-library" className='nav-link'>Character Library</Link>
            </li>
          </div>
        
      </nav>
    </header>
  )
}

export default NavBar