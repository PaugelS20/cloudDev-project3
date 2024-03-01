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
import { logoGithub, school } from 'ionicons/icons';
// import { Link } from 'react-router-dom';


export const Home = () => {
  return (
   <>		
    <IonGrid>
		<IonRow>
			<IonCol className='spacing'>
				<IonCard>
				
					<IonImg className='starWarsImg' src="../images/Star-Destroyer.png" alt="Star wars star destryoer img"></IonImg>
				
					<IonCardHeader>
						<IonCardTitle aria-label="intro-title">
							Hi, I'm Sam, a Frontend Developer
						</IonCardTitle>
						
						<IonCardSubtitle>
							MATC 2024
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent>
						<p aria-label="intro-text">
							Currently I'm looking for full-time entry-level positions as a Front End Developer. My graduation date is May of this year 2024 <IonIcon icon={school}></IonIcon>. Joining any team to create websites with passion and meaning. Please <a href="/Contact">contact</a> me with any questions you might have.
						</p>

						<p>Here's my  <a href="https://github.com/PaugelS20">GitHub Profile<IonIcon icon={logoGithub}></IonIcon></a>
						 to see some of the things I'm working on right now.</p>
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	</IonGrid>
   </>
  );
}
