import './App.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence} from "framer-motion";
import Card from "./cards";

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
                            <Card>
                            test
                            </Card>
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
      }




}

export default Page;