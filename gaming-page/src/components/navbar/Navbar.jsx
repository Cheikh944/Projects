import React, { useState } from 'react';
import './navbar.css';
import logo from '../Image/logo.png';
import cs from '../Image/CS.png'
import pubg from '../Image/Pubg.png'
import fortnite from '../Image/Fortnite.png'
import valorant from '../Image/Valorant.png'
const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar-desk">
      <ul>
        <a href=""><li>Tournaments</li></a>
        <a href=""><li>Our Team</li></a>
        <a href=""><li>Our Sponsors</li></a>
      </ul>
      <img src={logo} alt="" />
      <ul>
        <a href=""><li>About Us</li></a>
        <a href=""><li>Shop</li></a>
        <a href=""><li>Contact Us</li></a>
      </ul>
      </div>
      {openMenu ? (
        <i onClick={() => setOpenMenu(false)} className="mobile-menu fa-solid fa-xmark fa-2xl"></i>
      ) : (
        <i onClick={() => setOpenMenu(true)} className='mobile-menu fa-solid fa-bars fa-2xl'></i>
      )}

      {openMenu && (
        <div className='navbar-mobile'>
          <img src={logo} alt="" />
          <ul>
            <a href=""><li>Tournaments</li></a>
            <a href=""><li>Our Team</li></a>
            <a href=""><li>Our Sponsors</li></a>
            <a href=""><li>About Us</li></a>
            <a href=""><li>Shop</li></a>
            <a href=""><li>Contact Us</li></a>
          </ul>
        </div>
      )}

      <div className="hero">
        <div className="text">
          <h2>Welcome to the <strong>Esport</strong></h2>
          <h1>Multiverse</h1>
          <button>Join Tournament</button>
        </div>
        <div className="image-grid">
          <img className='cs' src={cs} alt=""/>
          <img className='pubg' src={pubg} alt=""/>
          <img className='fortnite' src={fortnite} alt=""/>
          <img className='valorant' src={valorant} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Navbar