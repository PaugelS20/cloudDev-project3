// /* Sam Paugel 2022© */
// import React from "react";
// import Menu from "./Menu.js";
// import Navbar from "./Navbar.js";
// import About from "./about.js";
// import Contact from "./contact.js";
// import Skills from "./skills.js";
// import {Routes, Route } from "react-router-dom";
// import "./Master.css";

// function App() {
// 	return (
// 		<div className="App">
// 			<header id="mainContent"></header>
// 			<body>
// 			<Navbar />
// 			<Menu />
// 					<Routes>
// 						{/* <Route path="/index.js" element={<About />} /> */}
// 						<Route path="/About" element={<About />} />
// 						<Route path="/Skills" element={<Skills />} />
// 						<Route path="/Contact" element={<Contact />} />
// 					</Routes>


// 				<div className="text-area">
// 					<h2
// 						aria-label="Hi, I'm Sam, a Frontend Developer"
// 						class="animate__animated animate__bounce">
// 						Hi, I'm Sam, a Frontend Developer
// 					</h2>
// 				</div>
// 			</body>
// 			<a id="mainContentLink" href="#mainContent" className="skipLink"></a>
// 		</div>
// 	);
// }
// export default App;

/* Sam Paugel 2022© */
import React from "react";
import Menu from "./Menu.js";
import Navbar from "./Navbar.js";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import "./Master.css";

const App = () => {
  return (
    <div className="App">
      <header id="mainContent"></header>
      <body>
        <Navbar />
        <Menu />
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
