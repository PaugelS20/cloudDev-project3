/* Sam Paugel 2023© */
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
} from '@ionic/react'
// import { logIn } from 'ionicons/icons';
// IonItem,IonInput,IonLabel,IonButton,IonIcon

export const Home = () => {
  return (
    <>
    <IonGrid>
      <IonRow>
		<IonCol className='spacing'>
			<IonCard>
				<IonCardHeader>
					<IonCardTitle aria-label="intro-title">
						Hi, I'm Sam, a Frontend Developer
					</IonCardTitle>
					<IonCardSubtitle>
						MATC 2023
					</IonCardSubtitle>
				</IonCardHeader>

				<IonCardContent>
				<p aria-label="intro-text">I am currently learning Advanced Front End, UIUX, 
				and Serverless Cloud with React. I am currently learning how to 
				use API's to make AWS and GitHub pages builds.</p>

				<p>Heres my <a href="https://github.com/PaugelS20">GitHub Profile</a> 
				to see some of the things I'm working on right now.</p>
				</IonCardContent>
			</IonCard>
	  	</IonCol>
      </IonRow>
	</IonGrid>
    </>
  );
}
