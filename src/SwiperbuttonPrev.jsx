import { useSwiper } from "swiper/react";
import "./Card.css"
import { motion } from 'framer-motion';

export default function SwiperButtonNext () {
  const swiper = useSwiper();
  return (
    
    <motion.div onClick={() => swiper.slideNext()}>
        <motion.button className="nextarrow" animate={{x:[0,100,0], y:[0,26.71,0]}} transition={{ repeat: Infinity, duration: 1 }}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="56" height="51" viewBox="0 0 56 51" fill="none"  >
          <path d="M41.8732 8.45997L29.5181 5.14941L38.0963 28.0469L19.2186 43.5877L31.5737 46.8982L50.4514 31.3575L41.8732 8.45997Z" fill="#87D4FF"/>
          <path d="M22.6545 3.31055L10.2993 0L18.8775 22.8975L-0.000178638 38.4382L12.355 41.7488L31.2327 26.2081L22.6545 3.31055Z" fill="#87D4FF"/>
        </svg>
        </motion.button>
        
   
    </motion.div>
    
  
  
  )
};