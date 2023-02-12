import React from 'react';
import { 
  IonBackButton, 
  IonButtons, 
  IonHeader, 
  IonContent, 
  IonToolbar, 
  IonTitle,
  IonCol, IonGrid, IonRow
} from '@ionic/react';

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
        Contact
      </IonContent>


    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>1</IonCol>
        <IonCol>2</IonCol>
        <IonCol>3</IonCol>
      </IonRow>
    </IonGrid>

    </>
  );
}
