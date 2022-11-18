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
      </div>
      </body>
      <a id="mainContentLink" href="#mainContent" className="skipLink">main content</a>
    </div>
  );
}
export default App;
