import React from 'react'
import './aboutme.css'

const AboutMe = () => {
  return (
    <div id='about' className='aboutme'>
        <h1>Resume</h1>
        <h2>Skills and Education</h2>
        <div className="aboutPhoto">
            <div>
                <li><label>Name</label><p>Diagana Cheikh Hamala</p></li>
                <li><label>Mail</label><p>cheikhdiag@yahoo.com</p></li>
                <li><label>Phone</label><p>07 81 88 39 55</p></li>
                <li><label>Github</label><p><a href="gdsfdf">dfdfsdfdsf</a></p></li>
                <li><label>Adress</label><p>50 rue de France, 94400</p></li>
            </div>
        </div>
    </div>
  )
}

export default AboutMe