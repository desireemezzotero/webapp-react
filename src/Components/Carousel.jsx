import React, { useRef, useState } from 'react';
import { useGlobalContext } from '../Contex/GlobalContext';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

function Carousel() {
  const {movies} = useGlobalContext()

  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {movies?.map(item => 
             <SwiperSlide key={item.id}>
               <Link to={`/${item.id}`}>
               <img src={item.img} alt="" />
               </Link>
             </SwiperSlide>)}
      </Swiper>
    </>
  );
}

export default Carousel