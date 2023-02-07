import React from 'react';
import { IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle
} from '@ionic/react'
import {BScard} from 'bootstrap';


export const Home = () => {
  return (
      <IonCard>
          <IonCardHeader>
            <IonCardTitle>Home Page</IonCardTitle>
            <IonCardSubtitle>Welcome</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <h2 aria-label="Hi, I'm Sam, a Frontend Developer">Hi, I'm Sam, a Frontend Developer</h2>
            <p>I am currently learning Avd CSS And JS Frameworks. In JS Frameworks I have been learning how to use Angular which so far is a very easy and fun language to learn!</p>      
          </IonCardContent>
        </IonCard>    
  );
}
