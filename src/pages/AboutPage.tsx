import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import { Contact } from './ContactPage';

export const About = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonNavLink routerDirection="forward" component={() => <Contact />}>
          <IonButton>Go to Page Three</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}
