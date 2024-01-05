import React, { useRef, useState } from 'react';
// Import Swiper React components
import SwiperButtonNext from './SwiperbuttonPrev';
import SwiperbuttonPrev from './SwiperbuttonNext';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { EffectCards, EffectCoverflow, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import './Card.css';






export default function Gallery() {
  const swiper = useSwiper()
  const [current,setCurrent] =useState(3)
  

  function test(index,current){
    if (Math.abs(current-index)>=2)
      return "0%"
    else if (Math.abs(current-index)==1)
      return "50%"
    else 
      return "100%"
  }
  
  return (
  
      
      <Swiper
  
        navigation={false}
        loop={false}
        initialSlide={1}
        effect={'cards'}
        invert={false}
        speed={700}
        grabCursor={true}
        onActiveIndexChange={(swiper) => 
          {
          console.log(swiper.activeIndex)
          setCurrent(swiper.activeIndex)}}
        
        Navigation={{
          prevEl: "prevel"

        }}
        
        cardsEffect={
          {rotate:0, 
          perSlideOffset:15
          
          }

       }
        
        modules={[EffectCards, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        
        <SwiperbuttonPrev> </SwiperbuttonPrev>
        <SwiperButtonNext> </SwiperButtonNext>
        <SwiperSlide style={{opacity:test(0,current)}}>Slide 0</SwiperSlide>
        
        <SwiperSlide style={{opacity:test(1,current)}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{opacity:test(2,current)}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{opacity:test(3,current)}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{opacity:test(4,current)}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{opacity: test(5,current)}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{opacity:test(6,current)}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{opacity:test(7,current)}}>Slide 7</SwiperSlide>
        <SwiperSlide style={{opacity:test(8,current)}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{opacity:test(9,current)}}>Slide 9</SwiperSlide>
        
        
      </Swiper>
    

  );
}


