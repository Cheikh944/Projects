import React from 'react'
import UseAxios from '../../hooks/UseAxios';
import './header.css'
const HeaderCard = (e) => {
    const { data } = UseAxios(`coins/${e.name}?tickers=false&community_data=false&sparkline=false&x_cg_demo_api_key=CG-LbRHoTvAKX7BQDAPJhyeiRHr`);
    console.log(data);

    if(!data){
        return <div>Chose a Crypto</div>
      }

  return (
    <div className='trendData'>
        <ul>
          <img src={data.image.small} alt="" />
          <h2>{data.name}</h2>
          <li>{data.symbol}</li>
        </ul>
        <h1>{data.market_data.current_price.eur} €</h1>
    </div>
  )
}

export default HeaderCard