import React from 'react';
import { 
	IonCard, 
	IonCardContent, 
	IonCardHeader, 
	IonCardSubtitle, 
	IonCardTitle,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonFooter,
  
} from '@ionic/react'
// import { logIn } from 'ionicons/icons';
// IonItem,IonInput,IonLabel,IonButton,IonIcon

export const Home = () => {
  return (
    <>
      <IonCard>
          <IonCardHeader>
            <IonCardTitle aria-label="intro-title">
              	Hi, I'm Sam, a Frontend Developer
            </IonCardTitle>
            <IonCardSubtitle>
			a Frontend Developer
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p aria-label="intro-text">I am currently learning Advanced Front End, UIUX, and Serverless Cloud with React. I am currently learning how to use API's to make AWS and GitHub pages builds.</p>

           <p>Heres my <a href="https://github.com/PaugelS20">GitHub Profile</a> to see some of the things I'm working on right now.</p>
          </IonCardContent>
      </IonCard>

	  <IonHeader>
        <IonToolbar>
          <IonTitle>
		  		Hi, I'm Sam, a Frontend Developer
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>Here's a small text description for the content. Nothing more, nothing less.</p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>
            Footer
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
