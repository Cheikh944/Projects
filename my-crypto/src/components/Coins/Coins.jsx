import React, { useEffect, useState } from 'react'
import UseAxios from '../../hooks/UseAxios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useData } from '../../Context/DataContext';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import './coins.css'
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';

const Coins = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const { data } = UseAxios(`coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=30d&locale=fr${apiKey}`);
    const { setMycoin, setCurrentPrice, setcurrentImage, setTrend } = useData();

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

    const handleChange = (id, img, price, trend) =>{
      setMycoin(id);
      setcurrentImage(img);
      setCurrentPrice(price);
      setTrend(trend);
    }
    

  return (
    <div className='coins'>
        <ul>
        <Swiper
        scrollbar={{
          hide: false,
          draggable: true
        }}
        direction= {screenWidth > 680 ? 'vertical' : 'horizontal'}
        mousewheel={true}
        slidesPerView={screenWidth > 680 ? 12 : 4}
        freeMode={true}
        modules={[FreeMode, Mousewheel, Scrollbar]}
        className="mySwiper"
      >
            {data && data.map(coin => (
              <SwiperSlide key={coin.id}>
              <ul onClick={()=> handleChange(coin.id, coin.image, coin.current_price, coin.price_change_percentage_24h)} className='coin'>
                <li>{coin.name}</li>
                <ul className='trend24h'>
                  <li className={coin.price_change_percentage_24h > 0 ? "trend-up" : "trend-down"}>{coin.price_change_percentage_24h}</li>
                  {coin.price_change_percentage_24h > 0 ? <i className="fa-solid fa-arrow-trend-up trend-up"></i>: <i className="fa-solid fa-arrow-trend-down trend-down"></i>}
                </ul>
                  <img src={coin.image} alt="" />
              </ul>
              </SwiperSlide>
            )
            )}
      </Swiper>   
        </ul>
    </div>
  )
}

export default Coins