import React from 'react'
import './project.css'

const Project = () => {

  return (
    <div id='myproject' className='project'>
        <h1>Portfolio</h1>
        <h2>My project</h2>
        <div className="card-project">
          <a href="https://vpn-demo.netlify.app" target="_blank">
            <div className="pro-card proCard1">

            </div>
            <p>Utilisation d'un modèle (template) trouvé sur Figma pour la création d'un site proposant des offres de services VPN.</p>
          </a>
          <a href="https://coinfestapp.netlify.app" target="_blank">
            <div className="pro-card proCard2">
              
            </div>
            <p>Site de cryptomonnaie utilisant une API externe (CoinGecko) pour obtenir des informations en temps réel sur les cours et les données relatives aux cryptomonnaies.</p>
          </a>
          <a href="https://gaming-demo-cheikh.netlify.app" target="_blank">
            <div className="pro-card proCard3">
              
            </div>
            <p>Utilisation d'un modèle (template) trouvé sur Figma pour la création d'un site de gaming.</p>
          </a>
        </div>
    </div>
  )
}

export default Project