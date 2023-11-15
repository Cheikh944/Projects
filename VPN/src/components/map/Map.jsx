import React, { useState } from 'react';
import './map.css';
import map from '../Image/Huge Global.png';
import netflix from '../Image/netflix.png';
import reddit from '../Image/reddit.png';
import amazon from '../Image/amazon.png';
import discord from '../Image/discord.png';
import spotify from '../Image/spotify.png';

const Map = () => {
  return (
    <div className='map'>
      <div className="map-text">
        <h2>Huge Global Network of Fast VPN</h2>
        <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
      </div>
      <img src= {map} alt="" />
      <div className="support">
        <img src={netflix} alt="" />
        <img src={reddit} alt="" />
        <img src={amazon} alt="" />
        <img src={discord} alt="" />
        <img src={spotify} alt="" />
      </div>
    </div>
  )
}

export default Map