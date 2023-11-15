import './newarrivals.css';
import { Card } from '../index';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';

const NewArrivals = () => {

  const { data } = useData();

  const card = data.map(item => {
    if(item.tendance){
      return(
        <Card key={item.id} data= {item} />
      )
    }
    return console.log("ok")
  })
  
  return (
    <div className='newArrivals'>
        <section className="new-arrivals">
        <div className="view-all-arrivals">
            <h1>New Arrivals</h1>
            <Link to ="/Handbags">View All <i className="fa-solid fa-chevron-right"></i></Link>
        </div>
        <div className="arrivals-card">
          {card}
        </div>
    </section>
    </div>
  )
}

export default NewArrivals