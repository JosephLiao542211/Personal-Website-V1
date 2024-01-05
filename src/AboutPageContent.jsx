import React from 'react';

import Exploremore from './Exploremore';
import "./about.css"
import { ReactComponent as Linkdin } from './linkdin.svg';
import { ReactComponent as Github } from './github.svg';
function About({onpress}) {
    // Import result is the URL of your image
    return (
      <div>
          <div className='text'>
          <h5>JOSEPH <br></br>LIAO.</h5>  
          </div>
        <div className='photocard'>
          TEST
        </div>
          <div className='three-button'>
          <a href="https://en.wikipedia.org/wiki/Landing_page">
            <button className='resume'>
                Resume
              </button>
          </a>

            
              <button className='linkdin'>
                <Linkdin></Linkdin>
              </button>
              <button className='github'>
                <Github></Github>
              </button>

          </div>
          <div className='emailbox'>
            <h7>Josephliao1018@gmailcom</h7>
          </div>
          <div className='text-front'>
                <p3>About Me</p3>
                <br></br>
                <br></br>
                <p1>Hello, I'm Joseph Liao, a dedicated Computing student at Queen's University. Proficient in English, Mandarin, and skilled in programming languages like 
                  Python, C#, Java, and React, I bring a versatile set of capabilities. Throughout my academic journey, I've actively sought opportunities to apply my skills,
                  collaborating on various projects that reflect my passion for technology and design. With a proactive mindset and a commitment to continuous improvement, 
                  I am eager to contribute my dynamic skill set to new challenges in the technology and design space.</p1>
                <br></br>
                <br></br>
          </div>
          <div className="explorecontainer" onClick={() => onpress("Tech")} >
            <p1>Explore More Projects </p1>
            <Exploremore></Exploremore>
            
          </div>
          <div className='twocolum'>
            <div className='photocard second'>
            
            </div>
            <div className='text-end' width="100%" >
              
              <p1>Outside of the academic realm, I thrive on the 
                intensity and discipline of varsity wrestling at Queen's, where I've honed my physical and mental toughness. 
                Beyond the wrestling mat, my love for sports extends to snowboarding, basketball, and BJJ.  
                Alongside my passion for sports, I have a deep appreciation for creative pursuits including, traditional art, graphic design and game developments.</p1>

                <br></br>
                <br></br>
                

                <div className="explorecontainer" onClick={() => onpress("Art")} >
                  <p1>Explore My Artwork </p1>
                  <Exploremore></Exploremore>
            
                </div>
            </div>

          </div>
          
          

        </div>
      
    
    )
  }

export default About;