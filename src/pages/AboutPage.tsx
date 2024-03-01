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
    <>
	<IonGrid color="medium">
		<IonRow>
			<IonCol className='spacing'>
				<IonCard>
					
					<IonImg className='samPic' src="../images/PicOfSamPaugel.png" alt="Sam Paugel"></IonImg>
					
					<IonCardHeader>
						<IonCardTitle aria-label="intro-title">
							About
						</IonCardTitle>
						<IonCardSubtitle>
							Get to know me a little better
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent>
						Hi I'm Sam, an Entry-level Front End Developer based out of McFarland Wisconsin. Currently a student at Madison College. My graduation date is May 2024. I was also an Intern for Subzero Wolf and Cove for six and a half months. Doing Front-End work, QA Testing, and Data collection with SQL & Graph work in Excel.
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	</IonGrid>
    </>
  );
}
