import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo (1).png'

const Navbar = () => {
  
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <div className='navbar'>
      <div className="deskNavbar">
        <ul className='menu'>
          <img src={logo} alt="" />
          <Link to="/">Home</Link>
          <Link to="/Handbags"> Handbags</Link>
          <Link to="/Watches"> Watches</Link>
        </ul>
        <ul className='search-bar'>
          <Link to="/Cart"><i className="fa-solid fa-bag-shopping fa-xl"></i></Link>
        </ul>
      </div>
      {openMenu ? (
        <i onClick={() => setOpenMenu(false)} className="mobile-menu fa-solid fa-xmark fa-2xl"></i>
      ) : (
        <i onClick={() => setOpenMenu(true)} className='mobile-menu fa-solid fa-bars fa-2xl'></i>
      )}

      {openMenu && (
        <div className='navbar-mobile'>
            <ul className='menu'>
              <Link onClick={()=> setOpenMenu(false)} to="/">Home</Link>
              <Link onClick={()=> setOpenMenu(false)} to="/Handbags"> Handbags</Link>
              <Link onClick={()=> setOpenMenu(false)} to="/Watches"> Watches</Link>
              <Link onClick={()=> setOpenMenu(false)} to="/Cart"><i className="fa-solid fa-bag-shopping fa-xl"></i></Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar