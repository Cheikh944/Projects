import React, { useState } from 'react';
import './package.css';
import logo from '../Image/Free.png'

const Package = () => {
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
    setSelected2(false);
    setSelected3(false);
  };
  const planClass = `plan ${selected ? 'selected' : ''}`;

  const toggleSelected2 = () => {
    setSelected2(!selected2);
    setSelected(false);
    setSelected3(false);
  };
  const planClass2 = `plan ${selected2 ? 'selected'  : ''}`;

  const toggleSelected3 = () => {
    setSelected3(!selected3);
    setSelected(false);
    setSelected2(false);
  };
  const planClass3 = `plan ${selected3 ? 'selected' : ''}`;

  return (
    <div className='packages'>
      <div className="package-text">
        <h2>Choose Your Plan</h2>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>
      <div className="package-plan">
        <div className= {`${planClass} plan-free`}>
          <img src= {logo} alt="" />
          <h3>Free Plan</h3>
          <ul className="plan-nav">
            <li><i class="fa-solid fa-check fa-lg"></i>Unlimited Bandwitch</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Encrypted Connection</li>
            <li><i class="fa-solid fa-check fa-lg"></i>No Traffic Logs</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Works on All Devices</li>
          </ul>
          <h1>Free</h1>
          <button onClick={toggleSelected}>Select</button>
        </div>
        <div className= {`${planClass2} plan-standard`}>
          <img src= {logo} alt="" />
          <h3>Standard Plan</h3>
          <ul className="plan-nav">
            <li><i class="fa-solid fa-check fa-lg"></i>Unlimited Bandwitch</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Encrypted Connection</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Yes Traffic Logs</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Works on All Devices</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Connect Anyware</li>
          </ul>
          <h1>9 € <strong>/ mois</strong></h1>
          <button onClick={toggleSelected2}>Select</button>
        </div>
        <div className={`${planClass3} plan-premium`}>
          <img src= {logo} alt="" />
          <h3>Premium Plan</h3>
          <ul className="plan-nav">
            <li><i class="fa-solid fa-check fa-lg"></i>Unlimited Bandwitch</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Encrypted Connection</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Yes Traffic Logs</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Works on All Devices</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Connect Anyware</li>
            <li><i class="fa-solid fa-check fa-lg"></i>Get New Features</li>
          </ul>
          <h1>12 € <strong>/ mois</strong></h1>
          <button onClick={toggleSelected3}>Select</button>
        </div>
      </div>
    </div>
  )
}

export default Package