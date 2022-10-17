/* Sam Paugel 2022© */
import Navbar from "./Navbar.js";
import React from "react";
import "./Master.css";
import Menu from "./Menu.js";
import mainContent from "./index.html";
/*import {BrowserRouter as Router} from 'react-router-dom';*/
function App() {
	return (
		
		<div className="App">
		
				<Navbar />
				<Menu />
				<mainContent/>
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
