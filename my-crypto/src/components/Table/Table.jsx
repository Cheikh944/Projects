import './table.css'
import UseAxios from '../../hooks/UseAxios'
import { useData } from '../../Context/DataContext';
import logo from '../../Image/Logo (3).png';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Table = () => {

  const apiKey = process.env.REACT_APP_API_KEY;
  const { myCoin, currentPrice, currentImage, trend } = useData();
  const { data } = UseAxios(`coins/${myCoin}/market_chart?vs_currency=eur&days=14${apiKey}`);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(!data){
      return <div className='load'>
        <h1>Choose a Crypto</h1>
        <img src={logo} alt="" />
      </div>
    }
    
    console.log(data);
    
    const coinData = data.prices.map(val=> ({
      x: val[0],
      y: val[1].toFixed(2)
    }))

    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Coin Chart',
        },
      },
    };

    const radius = screenWidth < 800 ? 0 : 3

    const dataCoin = {
      labels: coinData.map(val =>moment(val.x).format('MMMDD')),
      datasets: [
        {
          pointRadius : radius,
          fill: true,
          label: myCoin ,
          data: coinData.map(val => val.y ),
          borderColor: '#FFFF',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

    
  return (
    <div className='table'>
      <div className='table-info'>
        <img src={currentImage} alt="" />
        <ul className='table-Trend'>
            <i className="fa-solid fa-chart-simple fa-xl"></i>
            <li className={trend > 0 ? "trend-up" : "trend-down"}>{trend}</li>
              {trend > 0 ? <i className="fa-solid fa-arrow-trend-up trend-up"></i>: <i className="fa-solid fa-arrow-trend-down trend-down"></i>}
        </ul>
        <h2><i className="fa-solid fa-coins"></i> {currentPrice} €</h2>
      </div>
        <Line className='line' options={options} data={dataCoin}/>
    </div>
  )
}

export default Table