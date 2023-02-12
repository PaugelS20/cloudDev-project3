import React from 'react';
import { IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle
} from '@ionic/react'



export const Home = () => {
  return (
      <IonCard className='--ion-background-color'>
          <IonCardHeader>
            <IonCardTitle></IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <h2 aria-label="intro-text">Hi, I'm Sam, a Frontend Developer</h2>
            <p>I am currently learning Advanced Front End, UIUX, and Serverless Cloud with React. I am currently learning how to use API's to make AWS and GitHub pages builds.</p>

            <a href="https://github.com/PaugelS20">Heres my GitHub Profile to see some of the things I'm working on right now.</a>
          </IonCardContent>
      </IonCard>
  );
}
