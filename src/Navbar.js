/* Sam Paugel 2022© */
import "./Navbar.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { IconContext } from "react-icons";

 const Navbar = () => {
  return (
    <menu className="main-menu">
      <div className="main-menu__top">
        <a class="logoLink" href="www.sampaugel.com">
          <img id="paugel-logo" src="images/logo.png" alt="Paugel Logo" />
          <span id="logoText">Paugel</span>
        </a>
        <span>Front End Developer</span>
      </div>
      <nav className="main-menu_nav">
        <a href="about.html">About</a>
        <a href="skills.html">Skills</a>
        <a href="contact.html">Contact</a>
      </nav>

      <ul className="social">
      <IconContext.Provider value={{ className: "socialLinks" }}>
        <li><a href="https://www.linkedin.com/in/sam-paugel-884829232/"><BsLinkedin/></a></li>
        <li><a href=""><SiIndeed/></a></li>
        <li><a href="https://www.instagram.com/paugs17/"><BsInstagram/></a></li>
        <li><a href="https://www.facebook.com/sam.paugel.3/"><BsFacebook/></a></li>
      </IconContext.Provider>
      </ul>
    </menu>
  );
}
export default Navbar; 
//
//<button onClick={toggleNav} className="btn"><img src="images/menu-icon.svg" alt="Menu Icon"/></button>

  /* <button onClick={toggleMenu} class="btn" >
            <BsList />
          </button> */

  /* <img id="menu-icon" src="images/menu-icon.svg" alt="Menu Icon" /> */


/* Sam Paugel 2022© */
// // import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { IconContext } from "react-icons";
// import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { SiIndeed } from "react-icons/si";
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   return (
//     <menu className="main-menu">
//       <div className="main-menu__top">
//         <a class="logoLink" href="www.sampaugel.com">
//           <img id="paugel-logo" src="images/logo.png" alt="Paugel Logo" />
//           <span id="logoText">Paugel</span>
//         </a>
//         <span>Front End Developer</span>
//       </div>
//       <nav className="main-menu_nav">
//       	<Link to="/about">About</Link>
//       	<Link to="/skills">Skils</Link>
//       	<Link to="/contact">Contact me</Link>
//       </nav>

//       <ul className="social">
//       <IconContext.Provider value={{ className: "socialLinks" }}>
//         <li><a href="https://www.linkedin.com/in/sam-paugel-884829232/"><BsLinkedin/></a></li>
//         <li><a href="https://profile.indeed.com"><SiIndeed/></a></li>
//         <li><a href="https://www.instagram.com/paugs17/"><BsInstagram/></a></li>
//         <li><a href="https://www.facebook.com/sam.paugel.3/"><BsFacebook/></a></li>
//         </IconContext.Provider>
//       </ul>
//     </menu>
//   );
// }
// export default Navbar;