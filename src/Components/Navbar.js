import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll'
function Navbar(props) {
    
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
      useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })

  return (
    <nav>
        <div className={navbar ? "wrapper bg-show":"wrapper bg-hide"}>
                <Link className="my-name"    activeClass="active" to="top" spy={true}  smooth={true}>Emil Bertholdsson</Link>
                <Link className="nav-button" activeClass="active" to="about-section"   spy={true} smooth={true}>Om mig</Link>
                <Link className="nav-button" activeClass="active" to="exp-section"     spy={true} smooth={true}>Erfarenheter</Link>
                <Link className="nav-button" activeClass="active" to="project-section" spy={true} smooth={true}>Projekt</Link>
                <Link className="nav-button" activeClass="active" to="contact-section" spy={true} smooth={true}>Kontakt</Link>
        </div>
    </nav>
      
  );
}
export default Navbar;