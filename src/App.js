/* Sam Paugel 2022© */
import React from "react";
import Menu from "./Menu.js";
import Navbar from "./Navbar.js";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import "./Master.css";

const App = () => {
  return (
    <div className="App">
      <header id="mainContent"></header>
      <body>
        <Navbar />
        {/* <Menu /> */}
          <div className="text-area">
           <h2 aria-label="Hi, I'm Sam, a Frontend Developer" class="animate__animated animate__bounce">Hi, I'm Sam, a Frontend Developer</h2>
           <p>I am currently learning Avd CSS And JS Frameworks. In JS Frameworks I have been learning how to use Angular which so far is a very easy and fun language to learn!</p>
      </div>
      </body>
      <a id="mainContentLink" href="#mainContent" className="skipLink">main content</a>
    </div>
  );
}
export default App;
