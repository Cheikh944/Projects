import React from 'react'
import './contact.css'
import github from '../../Image/github-mark.svg'
const Contact = () => {
  return (
    <nav id='home' className='contact'>
      <a href="b"><img src={github} alt="" /></a>
      <a href="./CV dev (5).pdf" download><button>DOWNLOAD CV</button></a>
    </nav>
  )
}

export default Contact