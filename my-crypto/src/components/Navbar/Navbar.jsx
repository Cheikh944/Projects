import React from 'react'
import './navbar.css'
import logo from '../../Image/Logo (3).png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <h1>Welcome Back</h1>
    </div>
  )
}

export default Navbar