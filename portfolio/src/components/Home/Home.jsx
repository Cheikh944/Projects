import './home.css'
import photo from '../../Image/profil.jpg'
const Home = () => {

  return (
    <div id='home-mobile' className='home'>
      <div className="home-text">
        <p>Hello, I'm</p>
        <h1>Diagana <br />Cheikh Hamala</h1>
        <p>Front End Developer</p>
      </div>
      <div className="photo">
        <img src={photo} alt="" />
      </div>
    </div>
  )
}

export default Home