/* Sam Paugel 2022© */
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiIndeed } from "react-icons/si";
import { IconContext } from "react-icons";


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <menu className="main-menu">
      {/* (toggleNav || screenWidth 768px)
      { */}
      <a onClick={toggleMenu} class="" rel="home"></a>
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
//
//<button onClick={toggleNav} className="btn"><img src="images/menu-icon.svg" alt="Menu Icon"/></button>
{
  /* <button onClick={toggleMenu} class="btn" >
            <BsList />
          </button> */
}
{
  /* <img id="menu-icon" src="images/menu-icon.svg" alt="Menu Icon" /> */
}

// import React, {useState, useEffect} from 'react'
// import './Navbar.css'

// export default function Navbar() {
//   const [toggleMenu, setToggleMenu] = useState(false)
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth)


//   const toggleNav = () => {
//     setToggleMenu(!toggleMenu)
//   }

//   useEffect(() => {

//     const changeWidth = () => {
//       setScreenWidth(window.innerWidth);
//     }

//     window.addEventListener('resize', changeWidth)

//     return () => {
//         window.removeEventListener('resize', changeWidth)
//     }

//   }, [])

//   return (
//     <nav>
//       {(toggleMenu || screenWidth > 500) && (
//         <ul className="main-menu">
//         <a id="logo" rel="about" href="www.sampaugel.com">
//         <img src="Images/logo.png" alt="img goes here"/>
//         <span>Paugel</span></a>
//             <li className="items"><a href="about.html">About</a></li>
//             <li className="items"><a href="skils.html">Skills</a></li>
//             <li className="items"><a href="contact.html">Contact</a></li>
//         </ul>
//       )}
//       <button onClick={toggleNav} className="btn">BTN</button>
//     </nav>

//   )
// }

