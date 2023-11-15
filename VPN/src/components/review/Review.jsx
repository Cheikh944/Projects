import React, { useState } from 'react';
import './review.css';
import first from '../Image/1-profil.png'
import second from '../Image/2-profil.png'
import third from '../Image/3-profil.png'

const Review = () => {
  return (
    <div className='review'>
      <div className="review-text">
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
      </div>
      <div className="review-plan">
        <div className="review-card">
          <div className="review-header">
            <img src={first} alt="" />
            <ul>
              <h2>Viezh Robert</h2>
              <p>Warsaw, Poland</p>
            </ul>
            <h3>4.5 <i class="fa-solid fa-star"></i></h3>
          </div>
          <p className='card-text'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <img src={second} alt="" />
            <ul>
              <h2>Yessica Christy</h2>
              <p>Shanxi, China</p>
            </ul>
            <h3>4.5 <i class="fa-solid fa-star"></i></h3>
          </div>
          <p className='card-text'>“I like it because I like to travel far and still can connect with high speed.”.</p>
        </div>
        <div className="review-card">
          <div className="review-header">
            <img src={third} alt="" />
            <ul>
              <h2>Kim Young Jou</h2>
              <p>Seoul, South Korea</p>
            </ul>
            <h3>4.5 <i class="fa-solid fa-star"></i></h3>
          </div>
          <p className='card-text'>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
        </div>
      </div>
    </div>
  )
}

export default Review