import './brand.css';
import { Link } from 'react-router-dom';

const Brand = () => {

  return (
    <div className='brand-row'>
        <h1>Shop by Brands</h1>
        <div className="brands">
            <Link>
            <div className="card-brands">
                <img src="Image/Zara_Logo 1.png" alt="" />
            </div>
            </Link>
            <Link>
            <div className="card-brands">
                <img src="Image/Dolce_&_Gabbana 1.png" alt="" />
            </div>
            </Link>
            <Link>
            <div className="card-brands">
                <img src="Image/H&M-Logo 1.png" alt="" />
            </div>
            </Link>
            <Link>
            <div className="card-brands">
                <img src="Image/Chanel_logo_interlocking_cs 1.png" alt="" />
            </div>
            </Link>
            <Link>
            <div className="card-brands">
                <img src="Image/Prada-Logo 1.png" alt="" />
            </div>
            </Link>
            <Link>
            <div className="card-brands">
                <img src="Image/logo 1.png" alt="" />
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Brand