/* Sam Paugel 2024© */
import React from 'react';
import { 
	IonCard, 
	IonCardContent, 
	IonCardHeader, 
	IonCardSubtitle, 
	IonCardTitle,
  	IonGrid,
  	IonRow,
	IonCol,
	IonImg,
	IonIcon,
} from '@ionic/react'
import { logoGithub } from 'ionicons/icons';
// import { Link } from 'react-router-dom';


export const Home = () => {
  return (	
	<IonGrid>
		<IonRow className='ion-justify-content-center'>
			<IonCol className='ion-margin-top ion-align-self-center' sizeLg='10' sizeMd="10">
				<IonCard>
				
					<IonImg className='starWarsImg' src="../images/Star-Destroyer.png" alt="Star Wars Star-Destroyer Image LucasFilm © 2024"></IonImg>
				
					<IonCardHeader>
						<IonCardTitle aria-label="intro-title">
							Hi, I'm Sam, a Frontend Developer
						</IonCardTitle>
						
						<IonCardSubtitle>
							About Me
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent className='ion-text-wrap'>
						<p aria-label="intro-text">
							Currently I'm looking for full-time entry-level positions as a Front End Developer. I'm ready to join any team to create websites with passion and meaning. 
							Please <a href="/Contact" aria-label='contact page'>contact</a> me with any questions you might have.
							Here's my  <a href="https://github.com/PaugelS20"> 
											GitHub Profile 
											<IonIcon aria-label='GitHub Logo' slot='icon-only' icon={logoGithub}></IonIcon>
									</a> to see some of the things I'm working on right now.
						</p>
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
{/* 
		<IonRow>
			<IonCol className='ion-margin-top ion-justify-content-center' sizeLg='9'>
				<IonCard>
				
					<IonImg className='starWarsImg' src="../images/Star-Destroyer.png" alt="Star Wars Star-Destroyer Image LucasFilm © 2024"></IonImg>
				
					<IonCardHeader>
						<IonCardTitle aria-label="intro-title">
							Hi, I'm Sam, a Frontend Developer
						</IonCardTitle>
						
						<IonCardSubtitle>
							About Me
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent className='ion-text-wrap'>
						<p aria-label="intro-text">
							Currently I'm looking for full-time entry-level positions as a Front End Developer. I'm ready to join any team to create websites with passion and meaning. 
							Please <a href="/Contact" aria-label='contact page'>contact</a> me with any questions you might have.
							Here's my  <a href="https://github.com/PaugelS20"> 
											GitHub Profile 
											<IonIcon aria-label='GitHub Logo' slot='icon-only' icon={logoGithub}></IonIcon>
									</a> to see some of the things I'm working on right now.
						</p>
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow> */}
	</IonGrid>
  );
}
