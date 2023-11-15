import React, { useState } from 'react';
import './navbar.css';
import logo from '../Image/Vector.png';

const Menu = () => {
  return (
    <ul className='navbar-li'>
       <a href="#"><li>About</li></a>
       <a href="#"><li>Features</li></a>
       <a href="#"><li>Pricing</li></a>
       <a href="#"><li>Testimonials</li></a>
       <a href="#"><li>Help</li></a>
    </ul>
  )
}
const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-desktop'>
        <a className='navbar-logo' href="#"><img src={logo} alt="" />Lasles<strong>VPN</strong></a>
        <Menu/>
        <ul className='navbar-button'>
          <button className='navbar-sign-in'>Sign In</button>
          <button className='navbar-sign-up'>Sign Up</button>
        </ul>
      </div>

      {openMenu ? (
        <i onClick={() => setOpenMenu(false)} className="mobile-menu fa-solid fa-xmark fa-xl"></i>
      ) : (
        <i onClick={() => setOpenMenu(true)} className='mobile-menu fa-solid fa-bars fa-xl'></i>
      )}

      {openMenu &&(
        <div className="navbar-mobile">
          <a className='navbar-logo' href="#"><img src={logo} alt="" />Lasles<strong>VPN</strong></a>
          <Menu/>
        </div>
      )}
    </div>
  )
}

export default Navbar