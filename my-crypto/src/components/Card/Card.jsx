import React from 'react'
import UseAxios from '../../hooks/UseAxios';
import './card.css'
import HeaderCard from '../HeaderCard/HeaderCard';
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

const Card = (e) => {
    const { data } = UseAxios(`coins/${e.name}/market_chart?vs_currency=eur&days=14&x_cg_demo_api_key=CG-LbRHoTvAKX7BQDAPJhyeiRHr`);
  
    if(!data){
        return <div>Chose a Crypto</div>
      }
      
      console.log(data);
      
      const coinData = data.prices.map(val=> ({
        x: val[0],
        y: val[1].toFixed(2)
      }));
  
      const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Coin Chart',
          },
        },
      };
  
      const dataCoin = {
        labels: coinData.map(val =>moment(val.x).format('MMMDD')),
        datasets: [
          {
            pointRadius: 0,
            fill: true,
            label: e.name ,
            data: coinData.map(val => val.y ),
            borderColor: e.color,
          },
        ],
      };

  return (
    <div className='cardfav'>
        <HeaderCard key={e.name} name= {e.name} />
        <Line className='line' options={options} data={dataCoin}/>
    </div>
  )
}

export default Card