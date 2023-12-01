import React from 'react';
import {
  IonCard, 
	IonCardContent, 
	IonCardHeader, 
	IonCardSubtitle, 
	IonCardTitle,
  	IonGrid,
  	IonRow,
	IonCol
} from '@ionic/react';


export const About = () => {
  return (
    <>
	<IonGrid color="medium">
		<IonRow>
			<IonCol className='spacing'>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle aria-label="intro-title">
							About
						</IonCardTitle>
						<IonCardSubtitle>
							Get to know me a little better
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent>
						Hi I'm Sam, a Entry level Front End Developer based out of Mcfarland Wisconsin. I'm currently a student at Madison College. My predicted graduation date is May 2024. 
						I was also an Intern for Subzero Wolf and Cove for six and a half months. Doing Front-End work, QA Testing, and Data collection with SQL/Graph work with Excel.
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	</IonGrid>
    </>
  );
}
