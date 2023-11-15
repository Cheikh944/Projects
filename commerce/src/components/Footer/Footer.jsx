import React, { useState } from 'react';
import './footer.css';

const Footer = () => {

  return (
    <footer>
        <div>
            <div className="category-footer">
                <div className="shop">
                    <h2>Shop by Category</h2>
                    <a href="">Skincare</a>
                    <a href="">Personal Care</a>
                    <a href="">Handbags</a>
                    <a href="">Apparels</a>
                    <a href="">Watches</a>
                    <a href="">Eye Wear</a>
                    <a href="">Jewellery</a>
                </div>
                <div className="shop">
                    <h2>About</h2>
                    <a href="">Contact Us</a>
                    <a href="">About Us</a>
                    <a href="">Careers</a>
                    <a href="">Press</a>
                </div>
                <div className="shop">
                    <h2>Policy</h2>
                    <a href="">Return Policy</a>
                    <a href="">Terms of Use</a>
                    <a href="">Sitemaps</a>
                    <a href="">Security</a>
                    <a href="">Privacy</a>
                    <a href="">EPR Compliance</a>
                </div>
            </div>
            <div className="info">
                <div className="social">
                    <a href=""><img src="Image/fb logo.png" alt="" /></a>
                    <a href=""><img src="Image/insta logo.png" alt="" /></a>
                    <a href=""><img src="Image/twitter.png" alt="" /></a>
                    <a href=""><img src="Image/youtube.png" alt="" /></a>
                </div>
                <h2>United States</h2>
                <p>© 2021 | Cora Leviene All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer