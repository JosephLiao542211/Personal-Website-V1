import './App.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence} from "framer-motion";

function Card(){
    const [dropdown,setdrop]=useState(false)

    const handleclick = ()=>{
        setdrop(!dropdown)
    }

    return(
        <motion.div 
            layout
            data-isOpen={dropdown}
            className="parent"
            initial={{ borderRadius: 50 }}
            transition={{ ease: "easeInOut", duration: 0.8}}
            onClick={handleclick}>

                
        </motion.div>
    )
}



    export default Card;