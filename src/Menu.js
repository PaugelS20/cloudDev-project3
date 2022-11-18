import React, { useState } from "react";
import Navbar from "./Navbar";
import { Squash as Hamburger } from "hamburger-react";
import "./Navbar.css";
import "./Menu.css";

export default function Menu() {
  const [open, setShow] = useState(false);
  return (
    <div className="hamburger">
        {open?<Navbar />:setShow}
        <Hamburger onClick={() => setShow(open) }/>
    </div>
    
  );
}
