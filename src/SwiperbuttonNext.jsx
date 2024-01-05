import { useSwiper } from "swiper/react";
import "./Card.css"
import { motion } from 'framer-motion';

export default function SwiperbuttonPrev () {
  const swiper = useSwiper();
  return (
    
    <motion.div onClick={() => swiper.slidePrev()}>
        <motion.button className="prevarrow" animate={{x:[0,100,0], y:[0,26.71,0]}} transition={{ repeat: Infinity, duration: 1 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="72" viewBox="0 0 74 72" fill="none">
        <path d="M32.9471 14.1904L45.3022 17.501L26.4246 33.0417L35.0028 55.9392L22.6476 52.6287L14.0694 29.7312L32.9471 14.1904Z" fill="#87D4FF"/>
        <path d="M52.1658 19.3408L64.521 22.6514L45.6433 38.1921L54.2215 61.0896L41.8664 57.7791L33.2882 34.8815L52.1658 19.3408Z" fill="#87D4FF"/>
        </svg>
        </motion.button>
        
   
    </motion.div>
    
  
  
  )
};