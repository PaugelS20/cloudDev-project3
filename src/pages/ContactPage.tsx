import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

export const Contact = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Contact</h1>
      </IonContent>
    </>
  );
}
