import React, { useEffect, useState } from 'react'
import Card from '../Card/Card.jsx'
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import UseAxios from '../../hooks/UseAxios.jsx';
import 'swiper/css';
import 'swiper/css/free-mode';
import'./trending.css'
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';

const Trending = () => {
    const { data } = UseAxios(`search/trending`);
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
      return <div>Chose a Crypto</div>
    }

    const cardData = data.coins.slice(0,3);
    const colors = ["#FFA800", "rgba(53, 162, 235, 0.5)", "#FFF"];
    var i = -1;

    const card = cardData.map(item => {
      i++;
      var mycolor = colors[i];
          return(
            <Card key={item.item.coin_id} name= {item.item.id} color={mycolor}/>
          )
      })


  return (
    <div className='trend'>
      <Swiper
        scrollbar={{
          hide: false,
          draggable: true
        }}
        direction={screenWidth > 1000 ? 'vertical' : 'horizontal'}
        mousewheel={true}
        freeMode={true}
        slidesPerView={screenWidth > 680 ? 2 : 1}
        modules={[FreeMode, Mousewheel, Scrollbar]}
        className="mySwiper"
      >
            {card && card.map((coin, index) => (
              <SwiperSlide key={index} className='swiper-slide'>
                {coin}
              </SwiperSlide>
            )
            )}
      </Swiper>
      {screenWidth > 1000 && (
        <i className="fa-solid fa-arrow-down"></i>
      )} 
    </div>
  )
}

export default Trending