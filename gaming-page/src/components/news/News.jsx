import React, { useState, useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../shop/shop.css';
import './news.css'
import shadow from '../Image/shadow_news.png'
import valo from '../Image/valo_news.png'
import gamer from '../Image/gamer_news.png'
import products from '../Image/products_news.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const News = () => {

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

  return (
    <div className='news shop'>
      <h1>Latest News</h1>
      <div className="shop_row">
      <Swiper
        slidesPerView={screenWidth > 1380 ? 3 :screenWidth < 600 ? 1 : 2}
        spaceBetween={screenWidth > 1380 ? 50 : 0}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className="s_row">
          <img src={shadow} alt="" />
          <h3>Aug 25, 2023</h3>
          <h2>Pro tips: How to improve your aim and reflexes in eSports</h2>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="s_row">
          <img src={valo} alt="" />
          <h3>Aug 27, 2023</h3>
          <h2>Top 10 eSports games to watch and play in 2023</h2>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="s_row">
          <img src={gamer} alt="" />
          <h3>Aug 28, 2023</h3>
          <h2>The life of a professional eSports gamer</h2>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="s_row">
          <img src={products} alt="" />
          <h3>Aug 27, 2023</h3>
          <h2>The best gaming accessories and gadgets for every gamer</h2>
         </div>
        </SwiperSlide>
        </Swiper>
      </div>
      <button>View More</button>
    </div>
  )
}

export default News