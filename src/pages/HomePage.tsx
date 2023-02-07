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
            <h2 aria-label="Hi, I'm Sam, a Frontend Developer">Hi, I'm Sam, a Frontend Developer</h2>
            <p>I am currently learning Avd CSS And JS Frameworks. In JS Frameworks I have been learning how to use Angular which so far is a very easy and fun language to learn!</p>
          </IonCardContent>
      </IonCard>
  );
}
