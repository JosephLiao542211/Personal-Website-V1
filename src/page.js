import './App.css';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

function Page({pagestate}){
    const [page,setpage] = useState(pagestate)
    useEffect(() => {
        setpage(pagestate);

      }, [pagestate]);

      switch(page){
        case "About":
            return(
                <div className='wrapper'>
                        <motion.div className='about' initial={{ x: 4000 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: 'spring', damping: 17
                        
                    }}>
                        <h1>About</h1>
                    </motion.div>
                </div>
                
                
            )
        case "Art":
            return(
                <div className='art'>
                    <h1>Art</h1>
                </div>
                
            )
        case "Tech":
            return(
                <h1>Tech</h1>
            )
      }




}

export default Page;