/* Sam Paugel 2023© */
import React from 'react';
import { Link } from "react-router-dom";
import { IonMenu, IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonMenuButton, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import {  } from "ionicons/icons";


export const Navbar = () => {
  return (
  <>
    <IonGrid>
      <IonRow>
          <IonMenu contentId="main-content">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Pages</IonTitle>
              </IonToolbar>
            </IonHeader>
            
            <IonContent className="ion-padding">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                      <Link className="nav-link" to='/'>Home</Link>
                  </li>
                  
                  <li className='nav-item'>
                      <Link className="nav-link" to='/About'>About</Link>
                  </li>
                  
                  <li className='nav-item'>
                      <Link className="nav-link" to='/Contact'>Contact</Link>
                  </li>
                </ul>
            
            </nav>
            
            </IonContent>
          </IonMenu>
            
            <IonPage id="main-content">
              
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                  </IonButtons>
                </IonToolbar>
            </IonPage>
      </IonRow>
  </IonGrid>
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