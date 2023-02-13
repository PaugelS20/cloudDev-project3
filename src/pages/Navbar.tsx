/* Sam Paugel 2023© */
import React from 'react';
import { Link } from "react-router-dom"
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { IonNav } from '@ionic/react';
// import { Home } from './HomePage'
// import { About } from './AboutPage'
// import { Contact } from './ContactPage'
// import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
            <Link className="nav-link" to='/Home'>Home</Link>
        </li>
        
        <li className='nav-item'>
            <Link className="nav-link" to='/About'>About</Link>
        </li>
        
        <li className='nav-item'>
            <Link className="nav-link" to='/Contact'>Contact</Link>
        </li>
      </ul>
  </div>
  </nav>

  <ion-grid>
  <ion-row>
    <ion-col size-xl="3" size-md="6" size-xs="12">
      <ion-card>
        <img [src]="c.imgUrl" />
        <ion-card-header>
          <ion-card-subtitle>{{c.desc}}</ion-card-subtitle>
          <ion-card-title>{{c.name}}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
        </ion-card-content>
      </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>


{/* <IonMenu className='' contentId="main-content">
  <IonHeader>
    <IonToolbar>
      <IonTitle>Menu Content</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent className="ion-padding">This is the menu content.</IonContent>
</IonMenu>
<IonPage id="main-content">
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <IonTitle>Menu</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent className="ion-padding">
    Tap the button in the toolbar to open the menu.
  </IonContent>
</IonPage> */}
</>
  )
}























{/* <Link className="nav-link" to='/counter'>Counter Page</Link>
<Link className="nav-link" to='/people-list'>People List Page</Link> */}  

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