import Navbar from './Navbar.js';
import React from 'react';
import './Master.css';
/*import {BrowserRouter as Router} from 'react-router-dom';*/
function App() { return (
<div className="App">
    <div className="grid-container">

    <body>
        <header>
            <h1 id="mainContent">Sam Paugel</h1>
            <Router>
                <Navbar/>
            </Router>
            /*{ //     <Switch>
            //         <Route path='/' exact component={Home} />
            //         <Route path='/about' component={About} />
            //         <Route path='/services' component={Services} />
            //         <Route path='/contact' component={Contact} />
            //         <Route path='/sign-up' component={SignUp} />
            //     </Switch>
            // </Router> }*/

        </header>

            <main>
            // <div id="text">
            // <h1>GeeksforGeeks</h1>
            //     <b>Hover over on the text</b>
            // </div>


            </main>
            <footer>
                <h2>Contact Me</h2>
                <p>Madison College 1701 Wright St, Madison, WI 53704</p>
                <p><a href="tel:+16085144097">(608)-514-4097</a></p>
                <p><a href="mailto:shpaugel@madisoncollege.edu">shpaugel@madisoncollege.edu</a></p>

                <h2>Add Me here</h2>
                <a href="https://www.instagram.com/paugs17/"><img className="socialMedia" src="./instagram.svg" alt="Instagram Logo" target="blank" /></a>
                <a href="https://www.facebook.com/sam.paugel.3/"><img className="socialMedia" src="./facebook.svg" alt="Facebook Logo" target="blank" /></a>
                <i>Developed by Sam Paugel 2022©</i>
            </footer>
        </body>
        <a href="#mainContent" className="skipLink"></a>
    </div>
</div>
);} export default App;
