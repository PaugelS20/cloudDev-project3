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
  IonCol, 
  IonGrid, 
  IonRow, 
  IonIcon, 
  IonText, 
  IonChip
} from '@ionic/react';
import { 
  logoLinkedin, 
  mailOutline, 
  phonePortraitOutline 
} from 'ionicons/icons';

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
              	<IonIcon icon={mailOutline}></IonIcon><a href="mailto:spaugelwork@gmail.com">spaugelwork@gmail.com</a>
            </IonChip>

            {/* <IonChip>
              <IonIcon icon={mailOutline}></IonIcon><a href="mailto:sshpaugel@madisoncollege.edu">shpaugel@madisoncollege.edu</a>
            </IonChip> */}

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