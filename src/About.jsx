import React from "react";
import { NavLink } from "react-router-dom";
import imgfr from "../src/images/bgf.png";
import Common from "./Common";
import Skills from "./Skills"

const About = () => {
return(
<>
   <Common
   name="Welcome To About "  
   longdescp="High level experience in web design and development."
   btnname="See Service's"
   redr="/Service"

   />
   <Skills/>
</>
);
};

export default About;