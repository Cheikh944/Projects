import React from 'react';
import './hero.css';
import hero from '../Image/Illustration 1.png'
import user from '../Image/user.png'
import location from '../Image/location.png'
import server from '../Image/Server.png'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="hero-container">
        <div className="hero-text">
          <h2>Want anything to be easy with <strong>LaslesVPN</strong>.</h2>
          <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
          <button>Get Started</button>
        </div>
        <img src={hero} alt="" />
      </div>
      <div className="info">
        <li><img src={user} alt="" /><ul><p>90+</p><li>Users</li></ul></li>
        <li><img src={location} alt="" /><ul><p>30+</p><li>Locations</li></ul></li>
        <li><img src={server} alt="" /><ul><p>50+</p><li>Servers</li></ul></li>
      </div>
    </div>
  )
}

export default Hero