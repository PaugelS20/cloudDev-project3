import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import "./Menu.css";
import { Squash as Hamburger } from "hamburger-react";

export default function Menu() {
  const [open, setShow] = useState(false);
  return (
    <div className="hamburger">
        {open?<Navbar />:null}
        <Hamburger onClick={() => setShow(!open) }/>
    </div>
    
  );
}