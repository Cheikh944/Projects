import React from 'react'
import './resume.css'
import react from '../../Image/react.png'
import html from '../../Image/html.png'
import figma from '../../Image/figma.png'
import sass from'../../Image/sass.png'
import github from '../../Image/github-mark.svg'
import bootstrap from '../../Image/bootstrap.jpg'

const Resume = () => {

  return (
    <div id='resume' className='resume'>
        <h1>Resume</h1>
        <h2>Skills and Education</h2>
        <div className='resume-content'>
            <section className='education sect'>
              <li><span></span><h3>Education</h3></li>
              <section className="card-educ">
                <div>
                    <ul>
                      <h4>Bac+4 Développeur Full Stack en alternance</h4>
                      <p>Cloud Campus</p>
                    </ul>
                    <li>2023 - 2025</li>
                </div>
                <p className='card-text'>Formation de 2 ans visant à devenir développeur Full Stack.</p>
              </section>
              <section className="card-educ">
                <div>
                    <ul>
                      <h4>BTS Systèmes numériques Electroniques et communications</h4>
                      <p>Lycée polyvalent de Cachan Cachan, 94230 (France)</p>
                    </ul>
                    <li>2021 - 2023</li>
                </div>
                <p className='card-text'>Formation de 2 ans dans le domaine de l'informatique et de l'électronique. Durant ce cursus, les projets avaient pour objectif de relier la programmation et l'électronique (domotique, surveillance).</p>
              </section>
              <section className="card-educ">
                <div>
                    <ul>
                      <h4>DUT Génie électrique et informatique industrielle</h4>
                      <p>Université Paris-Est Créteil Créteil, 94000 (France)</p>
                    </ul>
                    <li>2020 - 2021</li>
                </div>
                <p className='card-text'>Réalisation d'une année de DUT suivie d'une réorientation en BTS.</p>
              </section>
            </section>
            <section className='skills sect'>
              <li><span></span><h3>Skills</h3></li>
              <div><p>React JS : </p><div><img className='react' src={react} alt="" /></div></div>
              <div><p>SCSS : </p><div><img className='react' src={sass} alt="" /></div></div>
              <div><p>HTML : </p><div><img src={html} alt="" /></div></div>
              <div><p>BOOTSTRAP : </p><div><img src={bootstrap} alt="" /></div></div>
              <h4>Others :</h4>
              <div><p>GITHUB : </p><div><img src={github} alt="" /></div></div>
              <div><p>Figma : </p><div><img src={figma} alt="" /></div></div>
            </section>
        </div>
    </div>
  )
}

export default Resume