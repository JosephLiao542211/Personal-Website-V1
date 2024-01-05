import React, { useState, useEffect } from 'react';
import Page from "./page";
import $ from 'jquery';
import { color, motion } from 'framer-motion';

function App() {
  const [pagestate, setpage] = useState("About");
  const [isOpen, setIsOpen] = useState(false);

  const [bg, setbg] = useState("#FFE6A2");
  
  

  const variants = {
    open: { x: "-30vh" },
    closed: { x: 0 },
  };

  const toggleHover = (button) => {
    
    $(button).toggleClass('hover');
  }

  const handleclick = () => {
    toggleHover(".buttonwrapper");
    setIsOpen(isOpen => !isOpen);
  }

  const handleColumnClick = (newPageState) => {
    toggleHover(".buttonwrapper");
    setpage(newPageState);
    setIsOpen(isOpen => !isOpen);
  }

  const bgfunc=(pagestate)=>{
    if (pagestate=="Art")
      return ("#FF6A6A")
    else if (pagestate=="Tech")
      return ("#54C2FF")
    else 
      return ('#FFE6A2')
  }

  useEffect(() => {
    setbg(bgfunc(pagestate));
    console.log(bg);
  }, [pagestate]);


  
  return (
    <div className="main" style={{backgroundColor:bg}} > 
      
      <Page pagestate={pagestate} onpress={handleColumnClick}></Page>

      
      <motion.div className='buttoncontainer'
      animate={isOpen ?  "open": "closed"}
      variants={variants}
      onClick={handleclick}>
        <div className="buttonwrapper">
            <div className='dot' ></div>
        </div>
      </motion.div> 
              
          <Columns
            backgroundColora={"#FFC555"}
            backgroundColorb={"#87D4FF"}
            backgroundColorc={"#FF6A6A"}
            state={isOpen}
            onClickColumn={handleColumnClick} // Pass the function to update pagestate
          />
        
        
      
    </div>
  );
}

function Columns({ backgroundColora, backgroundColorb, backgroundColorc, state, onClickColumn }) {
  const [navstate, setNavstate] = useState(state ? "c-container" : "c-container-closed");

  useEffect(() => {
    setNavstate(state ? "c-container" : "c-container-closed");
  }, [state]);

  const handleColumnClick = (newPageState) => {
     // Open the menu when a column is clicked
    onClickColumn(newPageState);
  }

  return (
    <nav>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0px", minWidth: "100%", justifyContent: "center"}}>
        <div>
          <div className={navstate} style={{ backgroundColor: backgroundColora }} onClick={() => handleColumnClick("About")}>
            <p1>About Me</p1>
          </div>
        </div>
        <div>
          <div className={navstate} style={{ backgroundColor: backgroundColorb }} onClick={() => handleColumnClick("Tech")}>
            <p1>Technology</p1>
          </div>
        </div>
        <div>
          <div className={navstate} style={{ backgroundColor: backgroundColorc }} onClick={() => handleColumnClick("Art")}>
            <p1>Art</p1>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
