import React from 'react';
import { 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBackButton, 
  IonButtons, 
  IonHeader, 
  IonContent, 
  IonToolbar, 
  IonTitle,
  IonCol, IonGrid, IonRow, IonIcon, IonText, IonChip
} from '@ionic/react';
import { logoLinkedin, mailOutline, phonePortraitOutline } from 'ionicons/icons';

export const Contact = () => {
  return (
    <>
    <IonGrid>
		<IonRow>
			<IonCol className='spacing'>
				<IonCard>
					<IonCardHeader>
						<IonCardTitle aria-label="intro-title">
							Contact
						</IonCardTitle>
						<IonCardSubtitle>
							Find me Here
						</IonCardSubtitle>
					</IonCardHeader>

					<IonCardContent id='contactChips'>

            <IonChip>
             <IonIcon icon={phonePortraitOutline}></IonIcon><a href="tel:+16085144097">(608)-514-4097</a>
            </IonChip>

            <IonChip>
              <IonIcon icon={mailOutline}></IonIcon><a href="mailto:shpaugel@madisoncollege.edu">shpaugel@madisoncollege.edu</a>
            </IonChip>

            <IonChip>
              <IonIcon icon={logoLinkedin}></IonIcon><a href="https://www.linkedin.com/in/sam-paugel2319117/">Linkedin</a>
            </IonChip>

					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	</IonGrid>
    




    </>
  );
}


    // <IonGrid fixed={true}>
    //   <IonRow>
    //     <IonCol>  
    //       <IonHeader>
    //           <IonToolbar>
    //             <IonButtons slot="start">
    //               <IonBackButton></IonBackButton>
    //             </IonButtons>
    //             <IonTitle>Contact</IonTitle>
    //           </IonToolbar>
    //       </IonHeader>
    //         <IonContent class="ion-padding">
    //           Contact
    //         </IonContent>
    //     </IonCol>
    //     <IonCol>2</IonCol>
    //     <IonCol>3</IonCol>
    //   </IonRow>
      
    //   <IonRow>
    //     <IonCol>  
    //       <IonHeader>
    //           <IonToolbar>
    //             <IonButtons slot="start">
    //               <IonBackButton></IonBackButton>
    //             </IonButtons>
    //             <IonTitle>Contact</IonTitle>
    //           </IonToolbar>
    //       </IonHeader>
    //         <IonContent class="ion-padding">
    //           Contact
    //         </IonContent>
    //     </IonCol>
    //     <IonCol>2</IonCol>
    //     <IonCol>3</IonCol>
    //   </IonRow>
      
    //   <IonRow>
    //     <IonCol>  
    //       <IonHeader>
    //           <IonToolbar>
    //             <IonButtons slot="start">
    //               <IonBackButton></IonBackButton>
    //             </IonButtons>
    //             <IonTitle>Contact</IonTitle>
    //           </IonToolbar>
    //       </IonHeader>
    //         <IonContent class="ion-padding">
    //           Contact
    //         </IonContent>
    //     </IonCol>
    //     <IonCol>2</IonCol>
    //     <IonCol>3</IonCol>
    //   </IonRow>
      
    //   <IonRow>
    //     <IonCol>  
    //       <IonHeader>
    //           <IonToolbar>
    //             <IonButtons slot="start">
    //               <IonBackButton></IonBackButton>
    //             </IonButtons>
    //             <IonTitle>Contact</IonTitle>
    //           </IonToolbar>
    //       </IonHeader>
    //         <IonContent class="ion-padding">
    //           Contact
    //         </IonContent>
    //     </IonCol>
    //     <IonCol>2</IonCol>
    //     <IonCol>3</IonCol>
    //   </IonRow>
    // </IonGrid>