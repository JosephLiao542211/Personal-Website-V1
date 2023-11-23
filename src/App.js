import './App.css';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function App() {

  const variants = {
    open: { x: -300 },
    closed: { x: 0 },
  }
  const [isOpen, setIsOpen] = useState(false)
  const [name, setname] = useState("close")
  

  const handleclick = () => {
    setIsOpen(isOpen => !isOpen);
    setname(isOpen ? "closed" : "opened");
  }

  return (
    <body>
    <div className="buttonwrapper">
      <motion.button
        id='button' 
        animate={isOpen ?  "open": "closed"}
        variants={variants}
        onClick={handleclick}
      ><h1>{name}</h1></motion.button>
    </div>
    
    <Columns backgroundColora={"red"} backgroundColorb={"blue"} backgroundColorc={"yellow"} state={isOpen}/>

  </body>
  )
}

function Columns({ backgroundColora, backgroundColorb, backgroundColorc, state }) {

  const [navstate, setNavstate] = useState(state ? "c-container" : "c-container-closed");
  useEffect(() => {
    setNavstate(state ? "c-container" : "c-container-closed");
  }, [state]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,33.333333%)", gap: "0px", width: "33vh", justifyContent: "center" }}>
      <div>
        <div className={navstate} style={{ backgroundColor: backgroundColora }}>
          <h1>About Me</h1>
        </div>
      </div>
      <div>
        <div className={navstate} style={{ backgroundColor: backgroundColorb }}>
          <h1>Technology</h1>
        </div>
      </div>
      <div>
        <div className={navstate} style={{ backgroundColor: backgroundColorc }}>
          <h1>Art</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
