import './style/handbags.css'
import { useData } from '../context/DataContext';
import { Card} from '../components/index';
import { useState } from 'react';

function Watches() {

  const { data } = useData();
  const [sortByPriceUp, setSortByPriceUp] = useState(false);
  const [sortByPriceDown, setSortByPriceDown] = useState(false);


  const sortedData = [...data];

  if (sortByPriceUp) {
    sortedData.sort((a, b) => a.price - b.price);
  }else if(sortByPriceDown){
    sortedData.sort((a, b) => b.price - a.price);
  }

  const card = Object.values(sortedData).map(item => {
    
    if(item.categorie === "watches"){
      return(
        <Card key={item.id} data= {item} />
      )
    }
    return console.log('ok');
  })

  return (
    <div className='handbags'>
      <h1>Watches</h1>
      <div className="price-watches">
        <h3>Price :</h3>
        <label>
            <input
              type="checkbox"
              checked={sortByPriceUp}
              onChange={() => {setSortByPriceUp(!sortByPriceUp) ; setSortByPriceDown(false);}}
            />
            Trier ordre croissant
        </label>
        <label>
            <input
              type="checkbox"
              checked={sortByPriceDown}
              onChange={() => {setSortByPriceDown(!sortByPriceDown); setSortByPriceUp(false)}}
            />
            Trier ordre décroissant
        </label>
      </div>
      <div className="bag">
        {card}
      </div>
    </div>
  );
}

export default Watches;