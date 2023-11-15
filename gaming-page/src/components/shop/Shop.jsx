import React, { useState, useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './shop.css';
import pc from '../Image/pc.png'
import manette from '../Image/manette.png'
import keybord from '../Image/keybord.png'
import headphone from '../Image/headphone.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Shop = () => {

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
    <div className='shop'>
      <h1>Shop</h1>
      <div className="shop_row">
      <Swiper
        slidesPerView={screenWidth > 1380 ? 3 :screenWidth < 600 ? 1 : 2}
        spaceBetween={screenWidth > 1380 ? 50 : 0}
        freeMode={false}
        centeredSlides={screenWidth < 800 ? true : false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className="s_row">
          <img src={pc} alt="" />
          <h3>NEW</h3>
          <h2>Ultimate gaming PC</h2>
          <h4>$1099</h4>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="s_row">
          <img src={manette} alt="" />
          <h3>Popular</h3>
          <h2>Xbox gaming controller</h2>
          <h4>$599</h4>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="s_row">
          <img src={keybord} alt="" />
          <h3>NEW</h3>
          <h2>Mechanical gaming keyboard</h2>
          <h4>$399</h4>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="s_row">
          <img src={headphone} alt="" />
          <h3>Popular</h3>
          <h2>Gaming headphone</h2>
          <h4>$599</h4>
         </div>
        </SwiperSlide>
        </Swiper>
      </div>
      <button>View More</button>
    </div>
  )
}

export default Shop