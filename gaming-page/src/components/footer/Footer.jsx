import React from 'react';
import './footer.css';
import { useFormik } from 'formik';
import facebook from '../Image/facebook.png'
import insta from '../Image/insta.png'
import youtube from '../Image/youTube.png'
import discord from '../Image/Discord.png'
const Footer = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });

  return (
    <footer className='footer'>
      <ul className='info'>
        <li><a href="">About Us</a></li>
        <li><a href="">Sponsorships</a></li>
        <li><a href="">Join Us</a></li>
        <li><a href="">Terms & Conditions</a></li>
        <li><a href="">Privacy Policy</a></li>
      </ul>
      <div className="foot_content">
        <div className="signup">
          <h1>Newsletter signup</h1>
          <form action="">
            <input 
                value={formik.values.email}
                onChange={formik.handleChange} 
                placeholder='Email' 
                id='email' 
                type="email" 
            />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="social">
          <h1>Follow us</h1>
          <ul>
            <li><a href=""><img src={facebook} alt="" /></a></li>
            <li><a href=""><img src={insta} alt="" /></a></li>
            <li><a href=""><img src={youtube} alt="" /></a></li>
            <li><a href=""><img src={discord} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;