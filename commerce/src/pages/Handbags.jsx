import { useState } from 'react';
import './style/handbags.css'
import { useData } from '../context/DataContext';
import { Card} from '../components/index';

function Handbags() {

  const { data } = useData();
  const colors = ['Black', 'Pink', 'Brown'];
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortByPriceUp, setSortByPriceUp] = useState(false);
  const [sortByPriceDown, setSortByPriceDown] = useState(false);

  const handleColorChange = (event) => {
    const color = event.target.value.toLowerCase();
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  }

  const sortedData = [...data];

  if (sortByPriceUp) {
    sortedData.sort((a, b) => a.price - b.price);
  }else if(sortByPriceDown){
    sortedData.sort((a, b) => b.price - a.price);
  }


  const filteredItems = selectedColors.length === 0 ?
  sortedData  :
  sortedData.filter(item => selectedColors.includes(item.bagColor.toLowerCase()));

  const card = filteredItems.map(item => {
    if(item.categorie === "handbags"){
      return(
        <Card key={item.id} data= {item} />
      )
    }
    return console.log('ok');
  })


  return (
    <div className='handbags'>
      <h1>Handbags</h1>
      <div className="filter">
        <div className="color">
          <h3>Color :</h3>
        {colors.map(color => (
          <label key={color}>
            <input
              type="checkbox"
              value={color}
              checked={selectedColors.includes(color.toLowerCase())}
              onChange={handleColorChange}
            />
            {color}
          </label>
        ))
        }
        </div>

        <div className="price">
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
      </div>
      <div className="bag">
        {card}
      </div>
    </div>
  );
}

export default Handbags;