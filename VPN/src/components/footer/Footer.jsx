import React, { useState } from 'react';
import './footer.css';
import logo from '../Image/Vector.png'
import facebook from '../Image/Facebook.png'
import twitter from '../Image/Twitter.png'
import instagram from '../Image/Instagram.png'

const Footer = () => {
  return (
    <div className='sub'>
      <div className="subscribe">
        <div className="subscribe-text">
          <h1>Subscribe Now for Get Special Features!</h1>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <button>Subscribe Now</button>
      </div>

      <footer>
        <div className="footer-card footer-info">
          <li><img src= {logo} alt="" />Lasles<strong>VPN</strong></li>
          <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
          <div className="logo-row">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="footer-card blog">
          <strong>Product</strong>
          <li>Download</li>
          <li>Pricing</li>
          <li>Locations</li>
          <li>Server</li>
          <li>Countries</li>
          <li>Blog</li>
        </div>
        <div className="footer-card engage">
          <strong>Engage</strong>
          <li>LaslesVPN ?</li>
          <li>FAQ</li>
          <li>Tutorials</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </div>
        <div className="footer-card earn-money">
          <strong>Earn Money</strong>
          <li>Affiliate</li>
          <li>Become Partner</li>
        </div>
      </footer>
    </div>
  )
}

export default Footer