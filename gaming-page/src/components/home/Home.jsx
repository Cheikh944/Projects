import React, { useState } from 'react';
import './home.css';
import img from '../Image/Hero.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="desc">
        <h1 className='title-h1'>About Us</h1>
        <div className="info">
          <img src={img} alt="" />
          <div className="text">
            <div className="card-row">
              <div className="card">
                <p>Tournaments played</p>
                <h3>30</h3>
              </div>
              <div className="card">
                <p>Tournaments won</p>
                <h3>10</h3>
              </div>
              <div className="card">
                <p>Awards won</p>
                <h3>5</h3>
              </div>
            </div>
            <p className='desc-p'>He is a professional esports gamer who competes in the game Dota 2. He is the carry and star player of the team Evil Geniuses, one of the most successful and popular teams in the world. He is known for his incredible mechanical skills, game sense, and versatility. He can play any hero and any role, and often surprises his opponents with his unconventional picks and builds. </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home