import React, { useRef, useState } from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectCards, EffectCoverflow, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import './Card.css';







export default function Gallery() {
  return (
    <div className='gallerycontainer'>
      <Swiper

        navigation={true}
        loop={false}
        initialSlide={3}
        effect={'cards'}
        invert={true}
        grabCursor={true}
        cardsEffect={
          {rotate:0, 
          perSlideOffset:15
          
          }

       }
        
        modules={[EffectCards, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        
        
      </Swiper>
    </div>

  );
}


