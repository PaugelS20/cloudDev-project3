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
	IonImg
} from '@ionic/react';

export const About = () => {
  return (

	<IonGrid>
		<IonRow className='ion-justify-content-center'>
			<IonCol className='ion-margin-top' sizeLg='8' sizeMd="7" sizeSm='6'>
				<IonCard>
					<IonImg className='samPic' src="../images/PictureofSamPaugel.png" alt="Sam Paugel"></IonImg>
					
					<IonCardHeader>
						<IonCardTitle aria-label="intro-title">
							About
						</IonCardTitle>
						<IonCardSubtitle>
							Get to know me a little better
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent className='ion-text-wrap'>
						Hi I'm Sam, an Entry-level Front End Developer based out of McFarland Wisconsin. 
						I was an Intern for Subzero Wolf and Cove for eight months. 
						My main tasks included Front-End work, QA Testing, Data collection using SQL, and Graph work in Excel.
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	</IonGrid>
	
  );
}
