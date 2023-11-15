import React, { useState } from 'react';
import './tournaments.css';
import logo from '../Image/logo.png';
import cs from '../Image/CS-card.png'
import pubg from '../Image/pubg-card.png'
import freefire from '../Image/freeFire-card.png'
import cod from '../Image/cod-card.png'
import cs2 from '../Image/Cs-card2.png'
import fortnite from '../Image/fortnite-card.png'

const Tournaments = () => {

  return (
    <div className='tournaments'>
      <h1>Tournaments</h1>
      <div className="tournaments_row">
        <div className="t_row">
          <img src={cs} alt="" />
          <h2>CS:GO Global Gaming League</h2>
          <h3>10 Sept 2023 / 14:00 PM IST</h3>
          <ul>
            <li><h4>Play mode</h4><p>5V5</p></li>
            <li><h4>Plateform</h4><p>PC</p></li>
            <li><h4>Prize</h4><p>$500</p></li>
          </ul>
        </div>
        <div className="t_row">
          <img src={pubg} alt="" />
          <h2>PUBG Esports Championship</h2>
          <h3>15 Sept 2023 / 20:00 PM IST</h3>
          <ul>
            <li><h4>Play mode</h4><p>1V1</p></li>
            <li><h4>Plateform</h4><p>Mobile</p></li>
            <li><h4>Prize</h4><p>$600</p></li>
          </ul>
        </div>
        <div className="t_row">
          <img src={freefire} alt="" />
          <h2>Free Fire ultimate challenge</h2>
          <h3>20 Sept 2023 / 22:00 AM IST</h3>
          <ul>
            <li><h4>Play mode</h4><p>5V5</p></li>
            <li><h4>Plateform</h4><p>Any</p></li>
            <li><h4>Prize</h4><p>$100</p></li>
          </ul>
        </div>
        <div className="t_row">
          <img src={cod} alt="" />
          <h2>Call of Duty Mobile league</h2>
          <h3>21 Sept 2023 / 20:00 PM IST</h3>
          <ul>
            <li><h4>Play mode</h4><p>1V1</p></li>
            <li><h4>Plateform</h4><p>Mobile</p></li>
            <li><h4>Prize</h4><p>$200</p></li>
          </ul>
        </div>
        <div className="t_row">
          <img src={cs2} alt="" />
          <h2>CS:GO Ultimate Challenge</h2>
          <h3>21 Sept 2023 / 16:00 PM IST</h3>
          <ul>
            <li><h4>Play mode</h4><p>5V5</p></li>
            <li><h4>Plateform</h4><p>PC</p></li>
            <li><h4>Prize</h4><p>$250</p></li>
          </ul>
        </div>
        <div className="t_row">
          <img src={fortnite} alt="" />
          <h2>Overwatch league tournament</h2>
          <h3>25 Sept 2023 / 21:00 AM IST</h3>
          <ul>
            <li><h4>Play mode</h4><p>5V5</p></li>
            <li><h4>Plateform</h4><p>PC</p></li>
            <li><h4>Prize</h4><p>$500</p></li>
          </ul>
        </div>
      </div>
      <button>View More</button>
    </div>
  )
}

export default Tournaments