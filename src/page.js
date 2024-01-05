import './App.css';
import About from './AboutPageContent';
import React, { useState, useEffect } from 'react';
import { ReactComponent as Yellow } from './yellowrings.svg';
import {color, motion} from "framer-motion";
import GitHubStats from './GithubStats';

import Statue from './images';

import Gallery from './SwiperGallery';
<link href='https://fonts.googleapis.com/css?family=Source Serif 4' rel='App'></link>


  

function Page({pagestate,onpress}){
    const [page,setpage] = useState(pagestate)

   

    useEffect(() => {
        setpage(pagestate);

      }, [pagestate]);
     

      switch(page){
        case "About":
            return(
                <motion.div className='about' initial={{ x: 4000 }}
                            
                            key={pagestate}
                            animate={{ x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{
                            type: 'spring', damping: 17
                            
                        }}>
                            <About onpress={onpress}/>
                            {/* <button  onClick={() => onpress("Art")}>CHANGE</button>
                           */}
                        </motion.div>
                
            )
        case "Art":
            return(
                
                    <motion.div className='art' initial={{ x: 4000 }}
                        key={pagestate}
                    animate={{ x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: 'spring', damping: 17
                        
                    }}>
                        <Statue/>
                        <div className='text'>
                            <h1>Art</h1>
                            <h2>/ärt/</h2>
                            <p3>The expression or application of human creative skill and imagination.</p3>
                            <br></br>
                            <br></br>
                            <p1>Around 7 years old was when I well into the artistic world, ever since then 
                                I have been creating visual media. Varying from traditional art to graphic design 
                                I consider myself a jack of all trades when it comes to art. 
                                <br></br><br></br>Please explore some of my work below.</p1>
                            <hr width="50%" color="#FFC555" size="50px" align="left"></hr>
                            
                        </div>
                        
                       
                        <svg xmlns="http://www.w3.org/2000/svg" width="545" height="389" viewBox="0 0 545 389" fill="none" className='bluetriangle' >
                            <path d="M544.093 0.500203L540.5 389L8.62362e-05 193.109L544.093 0.500203Z" fill="#87D4FF" fill-opacity="0.55"/>
                        </svg>
                        <Yellow className="yellowrings"/>
                        
                        <div class="container">
                            <div class="sidebar">
                                <div className='gallerycontainer'>
                                     <Gallery/>
                                </div> 
                                  
                            </div>
                            <div class="main-content">
                                <div className='text second'>
                                    <h2 >Traditional Art</h2>
                                    <p3 fill="#87D4FF">Charcoal Sketches, Paintings, Ink....<br></br></p3>
                                    <p1>My passion for art, particularly traditional forms, has been a lifelong journey that took root in my early years. 
                                        My specialties lie in painting and charcoal sketches however I prefer to try a variety of mediums. The practice of traditional art has equipped 
                                        me with a robust foundation in artistic concepts, and a knowledge base that I've applied to numerous creative pursuits. </p1>
                                
                                </div>   
                                    
                            </div>
                        </div>
                        <hr width="80%"  color="#FFC555" ></hr>
                        
                        

                        <div class="container graphic">
                            <div class="sidebar graphic">
                                <div className='text graphic'>
                                    <h2 >Traditional Art</h2>
                                    <p3 fill="#87D4FF">Charcoal Sketches, Paintings, Ink....<br></br></p3>
                                    <p1>My passion for art, particularly traditional forms, has been a lifelong journey that took root in my early years. 
                                        My specialties lie in painting and charcoal sketches however I prefer to try a variety of mediums. The practice of traditional art has equipped 
                                        me with a robust foundation in artistic concepts, and a knowledge base that I've applied to numerous creative pursuits. </p1>
                                
                                </div>   
                                    
                            </div>
                            <div class="main-content graphic">
                                <div className='gallerycontainer graphic'>
                                     <Gallery/>
                                </div> 
                                  
                            </div>
                            
                        </div>

                        



                        
                        
                        
                        
                        
                    </motion.div>
                
            )
        case "Tech":
            return(
                <div className='wrapper'>
                    <motion.div className='tech' initial={{ x: 4000 }}
                        key={pagestate}
                    animate={{ x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: 'spring', damping: 17
                        
                    }}>
                        
                        <h1>Technology</h1>
                       
                    </motion.div>
                    <GitHubStats />
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