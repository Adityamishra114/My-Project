import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import SliderData from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import { InfoDataTwo } from "./data/InfoDataTwo";
import InfoSectionTwo from "./components/InfoSectionTwo";
import InfoSectionThree from "./components/InfoSectionThree";
import { InfoDataThree } from "./data/InfoDataThree";
import NavDropdown from "./components/NavDropdown";
import InfoSectionFive from "./components/InfoSectionFive";
import { InfoDataFive } from "./data/InfoDataFive";
import InfoSectionSix from "./components/InfoSectionSix";
import { InfoDataSix } from "./data/InfoDataSix";

import InfoCard from "./components/InfoCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InfoSectionFour from "./components/InfoSectionFour";
import { InfoDataFour } from "./data/InfoDataFour";
import Container from "@mui/material/Container";
import InfoSectionSeven from "./components/InfoSectionSeven";
import InfoSectionEight from "./components/InfoSectionEight";
import { InfoDataEight } from "./data/InfoDataEight";

// import { AboutMenuData } from './data/AboutMenuData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} {...NavDropdown} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <NavDropdown /> */}
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSectionTwo {...InfoDataTwo} />
      <InfoSectionThree {...InfoDataThree} />
      <InfoSectionFour data={InfoDataFour} />
      <InfoSectionFive {...InfoDataFive} />
      <InfoSectionSix {...InfoDataSix} />
      <InfoSectionSeven />
      <InfoSectionEight {...InfoDataEight} />
    </>
  );
}

export default App;
