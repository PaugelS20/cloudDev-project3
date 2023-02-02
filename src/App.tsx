/* Sam Paugel 2022© */
import React = require('react');
import '@ionic/react/css/core.css';
import { setupIonicReact, IonNav } from '@ionic/react';
import "./Master.css";
import PageOne from './page-one';

setupIonicReact();

const App = () => {
  return (
    
  
     <IonNav root={() => <PageOne />}></IonNav>
    
    
  );
}
export default App;

{/* 
    <>
      <IonDatetime></IonDatetime>
      <IonButton fill="clear">Start</IonButton>
    </>





      <header id="mainContent"></header>
      <body>
        <Navbar />
        {/* <Menu /> */}
          {/* <div className="text-area">
           <h2 aria-label="Hi, I'm Sam, a Frontend Developer" class="animate__animated animate__bounce">Hi, I'm Sam, a Frontend Developer</h2>
           <p>I am currently learning Avd CSS And JS Frameworks. In JS Frameworks I have been learning how to use Angular which so far is a very easy and fun language to learn!</p>
      </div>
      </body>
      <a id="mainContentLink" href="#mainContent" className="skipLink">main content</a> */} 

