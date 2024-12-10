/* Sam Paugel 2024© */
import React from 'react';
import { Link } from "react-router-dom";
import {
	IonMenu, IonHeader, IonToolbar, IonContent,
	IonTitle, IonButtons, IonMenuButton,
	IonPage, IonGrid, IonRow, IonCol,
	IonButton, IonImg, IonMenuToggle, IonList
} from '@ionic/react';
import { Darkmode } from '../Darkmode';
import "../Master.css";


export const Navbar = () => {
	return (
			<IonGrid id='navGrid'>
				<IonRow>
					{/* Mobile Menu */}
					<IonMenu contentId="main-content">
						<IonHeader translucent>
							<IonToolbar>
								<IonTitle>Pages</IonTitle>
							</IonToolbar>
						</IonHeader>

						<IonContent className="ion-padding">
							<IonList className='ion-flex'>
								<IonMenuToggle>
									<IonButton fill="clear">
										<Link className="navLink" to='/'>Home</Link>
									</IonButton>
								</IonMenuToggle>

								<IonMenuToggle>
									<IonButton fill="clear">
										<Link className="navLink" to='/About'>About</Link>
									</IonButton>
								</IonMenuToggle>

								<IonMenuToggle>
									<IonButton fill="clear">
										<Link className="navLink" to='/Contact'>Contact</Link>
									</IonButton>
								</IonMenuToggle>
							</IonList>
						</IonContent>
					</IonMenu>

					<IonPage id="main-content">
						<IonToolbar>
							<IonRow>
								<IonCol size="9" className="navbar-small-devices ion-justify-content-center ion-no-padding" offset='1.3'>
									<IonImg className='logoImg' src="../images/logo.png" alt="Paugel logo"></IonImg>
								</IonCol>
								<IonCol className='darkModeContainer'>
									<Darkmode />
								</IonCol>
							
							</IonRow>

							<IonButtons slot="start">
								<nav className="navbar-small-devices">
									<IonMenuButton className='menuButton'></IonMenuButton>
								</nav>
	
								<IonGrid>
									<IonRow>
										<IonCol size="auto">
											<nav className="navbar-normal">
												<IonImg className='logoImg' src="../images/logo.png" alt="Paugel logo"></IonImg>
												
												<IonButton fill='clear'>
													<Link to='/'>Home</Link>
												</IonButton>

												<IonButton>
													<Link className="navLink" to='/About'>About</Link>
												</IonButton>

												<IonButton>
													<Link className="navLink" to='/Contact'>Contact</Link>
												</IonButton>
											</nav>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonButtons>
						</IonToolbar>
					</IonPage>
				</IonRow>
			</IonGrid>
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
