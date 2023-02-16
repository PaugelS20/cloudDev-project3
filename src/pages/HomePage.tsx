/* Sam Paugel 2023© */
import React from 'react';
import { Darkmode } from '../Darkmode';

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
			<IonCol className='darkModeContainer'>
				<Darkmode/>
			</IonCol>
		</IonRow>
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

					<p>Heres my <a href="https://github.com/PaugelS20">GitHub Profile</a> to see some of the things I'm working on right now.</p>
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	</IonGrid>
   </>
  );
}

//   <ion-app>

//     <ion-header >
//       <ion-toolbar>
//         <ion-buttons slot="start">
//           <ion-back-button default-href="#"></ion-back-button>
//         </ion-buttons>
//         <ion-title>Contacts</ion-title>
//         <ion-buttons slot="end">
//           <ion-button>
//             <ion-icon slot="icon-only" name="contact"></ion-icon>
//             </ion-button>
//           </ion-buttons>
//       </ion-toolbar>
//     </ion-header>

//     <ion-content class="main-content">
//       <ion-list>
//         <ion-item lines="full">
//           <ion-icon slot="start" name="moon"></ion-icon>
//           <ion-label>
//             Toggle Dark Theme
//           </ion-label>
//           <ion-toggle id="themeToggle" slot="end"></ion-toggle>
//         </ion-item>
//       </ion-list>

//       <ion-list>
//         <ion-list-header>
//           Recent Conversations
//         </ion-list-header>

//         <ion-item>
//           <ion-avatar slot="start">
//             <img src="http://placekitten.com/200/300" />
//           </ion-avatar>
//           <ion-label>
//             <h2>Finn</h2>
//             <h3>I'm a big deal</h3>
//             <p>Listen, I've had a pretty messed up day...</p>
//           </ion-label>
//         </ion-item>

//         <ion-item lines="full">
//           <ion-avatar slot="start">
//             <img src="http://placekitten.com/300/300" />
//           </ion-avatar>
//           <ion-label>
//             <h2>Han</h2>
//             <h3>Look, kid...</h3>
//             <p>I've got enough on my plate as it is, and I...</p>
//           </ion-label>
//         </ion-item>
//       </ion-list>

//       <ion-list>
//         <ion-list-header>
//           Favorite Toppings
//         </ion-list-header>

//         <ion-item>
//           <ion-label>
//             <h2>Pepperoni</h2>
//           </ion-label>
//           <ion-checkbox slot="end"></ion-checkbox>
//         </ion-item>

//         <ion-item lines="full">
//           <ion-label>
//             <h2>Pineapple</h2>
//           </ion-label>
//           <ion-checkbox slot="end"></ion-checkbox>
//         </ion-item>
        
//         <ion-item>
//           <ion-label>Number of Toppings</ion-label>
//           <ion-range min="0" max="10" snaps>
//             <ion-label slot="start">0</ion-label>
//             <ion-label slot="end">10</ion-label>
//           </ion-range>
//         </ion-item>
//       </ion-list>
//     </ion-content>
//   </ion-app>