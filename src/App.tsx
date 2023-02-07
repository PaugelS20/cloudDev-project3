/* Sam Paugel 2023© */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { About } from "./pages"
import { 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonContent } from '@ionic/react';
import "./Master.css";

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
        {/* <Link className="nav-link" to='/counter'>Counter Page</Link>
        <Link className="nav-link" to='/people-list'>People List Page</Link> */}
      <Routes>
            {/* <Route exact path="/" element={ <HomePage/> }/> */}
            <Route path="/about" element={ <About/> }/>
            {/* <Route exact path="/people-list" element={ <Contact/> }/> */}
            {/* <Route path="/protected" element={ <ProtectedPage/> }/> */}
            {/* <Route path="/controlled" element={ <ControlledFormPage/> }/> */}
            {/* <Route path="/uncontrolled" element={ <UncontrolledFormPage/> }/> */}
            {/* <Route path="*" element={ <NotFoundPage/> }/> */}
      </Routes>
    </BrowserRouter>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <h2 aria-label="Hi, I'm Sam, a Frontend Developer">Hi, I'm Sam, a Frontend Developer</h2>
            <p>I am currently learning Avd CSS And JS Frameworks. In JS Frameworks I have been learning how to use Angular which so far is a very easy and fun language to learn!</p>      
          </IonCardContent>
        </IonCard>      
        <IonContent className="ion-padding">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <p>Here's a small text description for the content. Nothing more, nothing less.</p>
    </IonContent>
    </div>
  );
}
export default App;

/* 
  <header id="mainContent"></header>
  <body>
    <Navbar />
    <Menu /> 
      <div className="text-area">
        
  </div>
  </body>
  <a id="mainContentLink" href="#mainContent" className="skipLink">main content</a> */

  