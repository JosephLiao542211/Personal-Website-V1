import React, { useState, useEffect } from 'react';
import Page from "./page";
import $ from 'jquery';
import { motion } from 'framer-motion';

function App() {
  const [pagestate, setpage] = useState("About");
  const [isOpen, setIsOpen] = useState(false);
  

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

  return (
    <div className="main">
      <Page pagestate={pagestate}></Page>
      <motion.div className='buttoncontainer'
      animate={isOpen ?  "open": "closed"}
      variants={variants}
      onClick={handleclick}>
        <div className="buttonwrapper">
            <div className='dot' ></div>
        </div>
      </motion.div> 
        
      <nav>        
        <Columns
          backgroundColora={"red"}
          backgroundColorb={"blue"}
          backgroundColorc={"yellow"}
          state={isOpen}
          onClickColumn={handleColumnClick} // Pass the function to update pagestate
        />
      </nav>
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
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,33.333333%)", gap: "0px", width: "17vw", justifyContent: "center" }}>
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
    </div>
  );
}

export default App;
