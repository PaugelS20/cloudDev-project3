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
						I am currently a student at Madison College
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	</IonGrid>
    </>
  );
}
