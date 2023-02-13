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
    


    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>  
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
        </IonCol>
        <IonCol>2</IonCol>
        <IonCol>3</IonCol>
      </IonRow>
    </IonGrid>

    </>
  );
}
