import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  
  return (
    <div className='hero-section'>
      <section className="hero">
        <div className="trendy">
            <h1>Carry your Funk</h1>
            <p>Trendy handbags collection for your party animal</p>
            <Link to="/Handbags"><button><i className="fa-solid fa-arrow-right fa-lg"></i> See More</button></Link>
        </div>
      </section>
    </div>
  )
}

export default Hero