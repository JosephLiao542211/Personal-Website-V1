import './App.css';

import React, { useState, useEffect } from 'react';
import { ReactComponent as Yellow } from './yellowrings.svg';
import { motion} from "framer-motion";
import Card from "./cards";
import Statue from './images';
<link href='https://fonts.googleapis.com/css?family=Source Serif 4' rel='App'></link>

  

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
                            
                            key={pagestate}
                            animate={{ x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{
                            type: 'spring', damping: 17
                            
                        }}>
                            <h1>About</h1>
                            <Card/>
                        </motion.div>
                        
                    </div>
                

                
                
            )
        case "Art":
            return(
                <div className='wrapper'>
                    
                    <motion.div className='art' initial={{ x: 4000 }}
                        key={pagestate}
                    animate={{ x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: 'spring', damping: 17
                        
                    }}>
                        <div className='text'>
                            <h1>Art</h1>
                            <h2>/ärt/</h2>
                            <p3>The expression or application of human creative skill and imagination.</p3>
                            
                        </div>
                        <Statue/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="545" height="389" viewBox="0 0 545 389" fill="none">
                            <path d="M544.093 0.500203L540.5 389L8.62362e-05 193.109L544.093 0.500203Z" fill="#87D4FF" fill-opacity="0.65"/>
                        </svg>
                        <Yellow/>
                        
                    </motion.div>
                    
                    
                </div>
                
            )
        case "Tech":
            return(
                <div className='wrapper'>
                        <motion.div className='Tech' initial={{ x: 4000 }}
                        key={pagestate}
                    animate={{ x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: 'spring', damping: 17
                        
                    }}>
                        <h1>Technology</h1>
                    </motion.div>
                </div>
            )
        default:
            return(
                <div>
                    ERROR
                </div>
            )
      }




}

export default Page;