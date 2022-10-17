/* Sam Paugel 2022© */
import Navbar from "./Navbar.js";
import React from "react";
import "./Master.css";
import Menu from "./Menu.js";
/*import {BrowserRouter as Router} from 'react-router-dom';*/
function App() {
  return (
    <div className="App">
      <header id="mainContent"></header>
      <body>
        <Navbar />
        <Menu />
        <div>
          <div className="text-area">
            <h2 aria-label="Me Myself and I">Hi,I'm Sam, a Frontend Developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis illum reiciendis animi ad voluptatum. Exercitationem
              error, quae dolorem repellat quibusdam enim voluptatem et saepe
              quam minima officiis recusandae culpa cumque. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Corporis officia soluta
              cumque excepturi maiores itaque earum inventore architecto, eaque
              eveniet illum perferendis beatae in quis dolorum harum voluptatum
              molestiae ipsa!
            </p>
          </div>
        </div>
      </body>
      <a href="#mainContent" className="skipLink"></a>
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
