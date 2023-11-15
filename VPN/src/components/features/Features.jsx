import React, { useState } from 'react';
import './features.css';
import illustration from '../Image/Illustration 2.png'

const Features = () => {
  return (
    <div className='features'>
      <img src={illustration} alt="" />
        <div className="features-text">
          <h2>We Provide Many <br/> Features You Can Use.</h2>
          <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
          <ul className="features-nav">
            <li><i class="fa-solid fa-circle-check fa-lg"></i>Powerfull online protection.</li>
            <li><i class="fa-solid fa-circle-check fa-lg"></i>Internet without borders.</li>
            <li><i class="fa-solid fa-circle-check fa-lg"></i>Supercharged VPN</li>
            <li><i class="fa-solid fa-circle-check fa-lg"></i>No specific time limits.</li>
          </ul>
        </div>
    </div>
  )
}

export default Features