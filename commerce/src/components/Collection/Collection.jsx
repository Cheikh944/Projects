import './collection.css';
import { Link } from 'react-router-dom';

const Collection = () => {

  return (
    <div className='collection-row'>
        <h1>Handpicked Collections </h1>
        <div className="collection">
            <Link>
            <div className="card1">
                <p>Personal Care</p>
            </div>
            </Link>
            <Link to="/Handbags">
            <div className="card2">
                <p>Handbags</p>
            </div>
            </Link>
            <Link to = "/Watches">
            <div className="card3">
                <p>Wrist Watches</p>
            </div>
            </Link>
            <Link>
            <div className="card4">
                <p>Sun Glasses</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Collection