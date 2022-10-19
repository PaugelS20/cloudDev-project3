/* Sam Paugel 2022© */
import React from "react";
import Menu from "./Menu.js";
import Navbar from "./Navbar.js";
import About from "./about.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Master.css";
import about from "./about.js";

function App() {
	return (
		<div className="App">
			<header id="mainContent"></header>
			<body>
				<Route>
					<Routes>
						<Navbar />
						{/* <Route path="/index.js" element={<About />} /> */}
						<Route path="/About" element={<About />} />
						<Route path="/Skills" element={<Skills />} />
						<Route path="/Contact" element={<Contact />} />
					</Routes>
				</Route>

				<Menu />
				<div className="text-area">
					<h2
						aria-label="Hi, I'm Sam, a Frontend Developer"
						class="animate__animated animate__bounce">
						Hi, I'm Sam, a Frontend Developer
					</h2>
				</div>
			</body>
			<a id="mainContentLink" href="#mainContent" className="skipLink">
				main content
			</a>
		</div>
	);
}
export default App;
// <h1><div class="text">S</div>
// <div class="text">a</div>
// <div class="text">m</div>
// <div class="text">P</div>
// <div class="text">a</div>
// <div class="text">u</div>
// <div class="text">g</div>
// <div class="text">e</div>
// <div class="text">l</div></h1>
