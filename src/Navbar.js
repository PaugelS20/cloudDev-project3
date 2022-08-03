import React, {useState, useEffect} from 'react'
import './Navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="main-menu">
        <a id="logo" rel="about" href="www.sampaugel.com">
        <img src="Images/logo.png" alt="img goes here"/>
        <span>Paugel</span></a>
            <li className="items"><a href="about.html">About</a></li>
            <li className="items"><a href="skils.html">Skills</a></li>
            <li className="items"><a href="contact.html">Contact</a></li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>

  )
}
/*
<nav className="main-menu">
{(toggleMenu || screenWidth > 500) && (
      <a className="items" href="index.html">About</a>
      //<a className="items" href="skills.html">Skills</a>
      //<a className="items" href="yourmom.html">Contact</a>

)}
<button onClick={toggleNav} className="btn">BTN</button>
</nav>*/
