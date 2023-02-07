/* Sam Paugel 2023© */
import React from 'react';
import { Link } from "react-router-dom"
// import { IonNav } from '@ionic/react';
// import { Home } from './HomePage'
// import { About } from './AboutPage'
// import { Contact } from './ContactPage'
// import "./Navbar.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Navbar = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <Link className="nav-link" to='/Home'>Home</Link>
    <Link className="nav-link" to='/About'>About</Link>
    <Link className="nav-link" to='/Contact'>Contact</Link>
  </>
  )
}
  

{/* <menu className="main-menu">
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
    </menu> */}