import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Page from "./page";

function App() {
  const [pagestate, setpage] = useState("About");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setname] = useState("close");

  const variants = {
    open: { x: -300 },
    closed: { x: 0 },
  };

  const handleclick = () => {
    setIsOpen(isOpen => !isOpen);
    setname(isOpen ? "closed" : "opened");
  }

  const handleColumnClick = (newPageState) => {
    setpage(newPageState);
    setname("closed");
  }

  return (
    <div className="main">
      <Page pagestate={pagestate}></Page>
      <div className="buttonwrapper">
        <motion.button
          id='button' 
          animate={isOpen ?  "open": "closed"}
          variants={variants}
          onClick={handleclick}
        ><h1>{name}</h1></motion.button>
      </div>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,33.333333%)", gap: "0px", width: "33vh", justifyContent: "center" }}>
        <div>
          <div className={navstate} style={{ backgroundColor: backgroundColora }} onClick={() => handleColumnClick("About")}>
            <h1>About Me</h1>
          </div>
        </div>
        <div>
          <div className={navstate} style={{ backgroundColor: backgroundColorb }} onClick={() => handleColumnClick("Tech")}>
            <h1>Technology</h1>
          </div>
        </div>
        <div>
          <div className={navstate} style={{ backgroundColor: backgroundColorc }} onClick={() => handleColumnClick("Art")}>
            <h1>Art</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
