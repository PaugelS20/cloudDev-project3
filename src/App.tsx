/* Sam Paugel 2023© */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, About, Contact, Navbar } from "./pages"
import "./Master.css";

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
        {/* <Link className="nav-link" to='/counter'>Counter Page</Link>
        <Link className="nav-link" to='/people-list'>People List Page</Link> */}
      <Routes>
            <Route path="/home" element={ <Home/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/contact" element={ <Contact/> }/>
            {/* <Route path="/protected" element={ <ProtectedPage/> }/> */}
            {/* <Route path="/controlled" element={ <ControlledFormPage/> }/> */}
            {/* <Route path="/uncontrolled" element={ <UncontrolledFormPage/> }/> */}
            {/* <Route path="*" element={ <NotFoundPage/> }/> */}
      </Routes>
    </BrowserRouter>
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

  